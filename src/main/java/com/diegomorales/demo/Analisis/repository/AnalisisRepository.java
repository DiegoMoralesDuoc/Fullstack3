package com.diegomorales.demo.Analisis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.diegomorales.demo.Analisis.model.Analisis;

public interface AnalisisRepository extends JpaRepository<Analisis, Long> {
    
}
