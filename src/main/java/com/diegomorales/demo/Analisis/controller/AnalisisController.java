package com.diegomorales.demo.Analisis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diegomorales.demo.Analisis.model.Analisis;
import com.diegomorales.demo.Analisis.service.AnalisisService;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/analisis")
public class AnalisisController {
    
    @Autowired
    private AnalisisService analisisService;

    @GetMapping
    public List<Analisis> getAllAnalisis () {
        return analisisService.getAllAnalisis();
    }
    
    
    @GetMapping("/{id}")
    public Analisis getAnalisisById(@PathVariable Long id){
        return analisisService.getAnalisisById(id);
    }

    @PostMapping
    public Analisis createAnalisis(@RequestBody Analisis analisis){
        return analisisService.createAnalisis(analisis);
    }
    
    @PutMapping("/{id}")
    public Analisis updateAnalisis(@PathVariable Long id, @RequestBody Analisis analisis){
        return analisisService.updateAnalisis(id, analisis);
    }

    @DeleteMapping("/{id}")
    public void deleteAnalisis(@PathVariable Long id){
        analisisService.deleteAnalisis(id);
    }
}
