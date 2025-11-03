package com.diegomorales.demo.Laboratorios.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.diegomorales.demo.Laboratorios.model.Laboratorio;

public interface LaboratorioRepository extends JpaRepository<Laboratorio, Long>{
    
}