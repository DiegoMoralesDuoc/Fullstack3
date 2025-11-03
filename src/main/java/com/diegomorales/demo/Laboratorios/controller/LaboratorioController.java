package com.diegomorales.demo.Laboratorios.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diegomorales.demo.Laboratorios.model.Laboratorio;
import com.diegomorales.demo.Laboratorios.service.LaboratorioService;

import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/laboratorios")
public class LaboratorioController {
    
    
    @Autowired
    private LaboratorioService laboratorioService;


    @GetMapping
    public List<Laboratorio> getAllLaboratorios () {
        return laboratorioService.getAllLaboratorios();
    }
    
    
    @GetMapping("/{id}")
    public Optional<Laboratorio> getLaboratorioById(@PathVariable Long id){
        return laboratorioService.getLaboratorioById(id);
    }

    @PostMapping
    public Laboratorio createLaboratorio(@RequestBody Laboratorio laboratorio){
        return laboratorioService.createLaboratorio(laboratorio);
    }
    
    @PutMapping("/{id}")
    public Laboratorio updateLaboratorio(@PathVariable Long id, @RequestBody Laboratorio laboratorio){
        return laboratorioService.updateLaboratorio(id, laboratorio);
    }

    @DeleteMapping("/{id}")
    public void deleteLaboratorio(@PathVariable Long id){
        laboratorioService.deleteLaboratorio(id);
    }
    
}
