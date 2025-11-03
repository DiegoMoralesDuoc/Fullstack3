package com.diegomorales.demo.Laboratorios.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diegomorales.demo.Laboratorios.model.Laboratorio;
import com.diegomorales.demo.Laboratorios.repository.LaboratorioRepository;

import java.util.List;
import java.util.Optional;

@Service
public class LaboratorioServiceImpl implements LaboratorioService {
    
    @Autowired
    private LaboratorioRepository laboratorioRepository;

    @Override
    public List<Laboratorio> getAllLaboratorios(){
        return laboratorioRepository.findAll();
    }

    @Override
    public Optional<Laboratorio> getLaboratorioById(Long id){
        return laboratorioRepository.findById(id);
    }

    @Override
    public Laboratorio createLaboratorio(Laboratorio laboratorio){
        return laboratorioRepository.save(laboratorio);
    }

    @Override
    public Laboratorio updateLaboratorio(Long id, Laboratorio laboratorio){
        if(laboratorioRepository.existsById(id)){
            laboratorio.setId(id);
            return laboratorioRepository.save(laboratorio);
        } else {
            return null;
        }
    }

    @Override
    public void deleteLaboratorio(Long id){
        laboratorioRepository.deleteById(id);
    }
}
