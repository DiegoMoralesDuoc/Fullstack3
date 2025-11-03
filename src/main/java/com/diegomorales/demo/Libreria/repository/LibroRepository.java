package com.diegomorales.demo.Libreria.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.diegomorales.demo.Libreria.model.Libro;

public interface LibroRepository extends JpaRepository<Libro, Long>{
    
}
