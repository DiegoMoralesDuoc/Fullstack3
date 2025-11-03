package com.diegomorales.demo.Libreria.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diegomorales.demo.Libreria.model.Libro;
import com.diegomorales.demo.Libreria.service.LibroService;

import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/libros")
public class LibroController {

    @Autowired
    private LibroService libroService;



    @GetMapping
    public List<Libro> getAllLibros () {
        return libroService.getAllLibros();
    }
    
    
    @GetMapping("/{id}")
    public Optional<Libro> getLibroById(@PathVariable Long id){
        return libroService.getLibroById(id);
    }

    @PostMapping
    public Libro createLibro(@RequestBody Libro libro){
        return libroService.createLibro(libro);
    }
    
    @PutMapping("/{id}")
    public Libro updateLibro(@PathVariable Long id, @RequestBody Libro libro){
        return libroService.updateLibro(id, libro);
    }

    @DeleteMapping("/{id}")
    public void deleteLibro(@PathVariable Long id){
        libroService.deleteLibro(id);
    }
    
}
