package com.cvforge.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cvforge.backend.model.CV;

public interface CVRepository extends JpaRepository<CV, Long> {
}