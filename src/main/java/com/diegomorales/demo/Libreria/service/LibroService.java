package com.diegomorales.demo.Libreria.service;
import java.util.List;
import java.util.Optional;

import com.diegomorales.demo.Libreria.model.Libro;

public interface LibroService {
    List<Libro> getAllLibros();
    Optional<Libro> getLibroById(Long id);
    Libro createLibro(Libro libro);
    Libro updateLibro(Long id, Libro libro);
    void deleteLibro(Long id);
}
