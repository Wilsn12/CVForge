package com.cvforge.backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cvforge.backend.model.CV;
import com.cvforge.backend.repository.CVRepository;

@RestController
@RequestMapping("/api/cvs")
@CrossOrigin(origins = "http://localhost:5173")
public class CVController {

    private final CVRepository cvRepository;

    public CVController(CVRepository cvRepository) {
        this.cvRepository = cvRepository;
    }

    @GetMapping
    public List<CV> getAllCVs() {
        return cvRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CV> getCVById(@PathVariable Long id) {
        return cvRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public CV createCV(@RequestBody CV cv) {
        return cvRepository.save(cv);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CV> updateCV(
            @PathVariable Long id,
            @RequestBody CV updatedCV
    ) {
        return cvRepository.findById(id)
                .map(cv -> {
                    cv.setName(updatedCV.getName());
                    cv.setProfessionalTitle(updatedCV.getProfessionalTitle());
                    cv.setEmail(updatedCV.getEmail());
                    cv.setPhone(updatedCV.getPhone());
                    cv.setLocation(updatedCV.getLocation());
                    cv.setLinkedin(updatedCV.getLinkedin());
                    cv.setPortfolio(updatedCV.getPortfolio());
                    cv.setSummary(updatedCV.getSummary());
                    cv.setPortfolio(updatedCV.getPortfolio());
                    cv.setSummary(updatedCV.getSummary());
                    cv.setExperiences(updatedCV.getExperiences());
                    cv.setEducation(updatedCV.getEducation());
                    cv.setProjects(updatedCV.getProjects());
                    cv.setSkills(updatedCV.getSkills());
                    cv.setCustomSections(updatedCV.getCustomSections());
                    cv.setDesign(updatedCV.getDesign());

                    cv.setTemplate(updatedCV.getTemplate());

                    return ResponseEntity.ok(cvRepository.save(cv));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCV(@PathVariable Long id) {
        if (!cvRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        cvRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}