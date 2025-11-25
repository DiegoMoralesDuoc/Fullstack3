package com.diegomorales.demo.Analisis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diegomorales.demo.Analisis.model.Analisis;
import com.diegomorales.demo.Analisis.repository.AnalisisRepository;
import com.diegomorales.demo.exception.ResourceNotFoundException;

import java.util.List;

@Service
public class AnalisiserviceImpl implements AnalisisService{
    
    @Autowired
    private AnalisisRepository analisisRepository;

    @Override
    public List<Analisis> getAllAnalisis(){
        return analisisRepository.findAll();
    }

    @Override
    public Analisis getAnalisisById(Long id) {
        return analisisRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Unalisis no encontrado con id: " + id));
    }

    @Override
    public Analisis createAnalisis(Analisis analisis){
        return analisisRepository.save(analisis);
    }

    @Override
    public Analisis updateAnalisis(Long id, Analisis analisis) {
        return analisisRepository.findById(id)
            .map(existing -> {
                if (analisis.getNombre() != null) existing.setNombre(analisis.getNombre());
                if (analisis.getTipo() != null) existing.setTipo(analisis.getTipo());
                if (analisis.getFechaCreacion() != null) existing.setFechaCreacion(analisis.getFechaCreacion());
                return analisisRepository.save(existing);
            })
            .orElseThrow(() -> new ResourceNotFoundException("Analisis no encontrado con id: " + id));
    }

    @Override
    public void deleteAnalisis(Long id){
        analisisRepository.deleteById(id);
    }





}
