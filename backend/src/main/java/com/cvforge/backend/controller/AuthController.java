package com.cvforge.backend.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cvforge.backend.entity.User;
import com.cvforge.backend.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest request) {

        if (request.name() == null || request.name().isBlank()) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", "Name is required"));
        }

        if (request.email() == null || request.email().isBlank()) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", "Email is required"));
        }

        if (request.password() == null || request.password().length() < 6) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", "Password must be at least 6 characters"));
        }

        if (userRepository.existsByEmail(request.email().toLowerCase())) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Map.of("message", "Email is already registered"));
        }

        User user = new User(
                request.name().trim(),
                request.email().toLowerCase().trim(),
                passwordEncoder.encode(request.password())
        );

        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Map.of(
                        "message", "Account created successfully",
                        "user", Map.of(
                                "id", user.getId(),
                                "name", user.getName(),
                                "email", user.getEmail()
                        )
                ));
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody SigninRequest request) {

        if (request.email() == null || request.password() == null) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", "Email and password are required"));
        }

        User user = userRepository
                .findByEmail(request.email().toLowerCase().trim())
                .orElse(null);

        if (user == null ||
                !passwordEncoder.matches(request.password(), user.getPassword())) {

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Invalid email or password"));
        }

        return ResponseEntity.ok(
                Map.of(
                        "message", "Signed in successfully",
                        "user", Map.of(
                                "id", user.getId(),
                                "name", user.getName(),
                                "email", user.getEmail()
                        )
                )
        );
    }

    public record SignupRequest(
            String name,
            String email,
            String password
    ) {
    }

    public record SigninRequest(
            String email,
            String password
    ) {
    }
}