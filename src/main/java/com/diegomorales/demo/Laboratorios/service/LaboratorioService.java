package com.diegomorales.demo.Laboratorios.service;
import java.util.List;
import java.util.Optional;

import com.diegomorales.demo.Laboratorios.model.Laboratorio;

public interface LaboratorioService {
    List<Laboratorio> getAllLaboratorios();
    Optional<Laboratorio> getLaboratorioById(Long id);
    Laboratorio createLaboratorio(Laboratorio laboratorio);
    Laboratorio updateLaboratorio(Long id, Laboratorio laboratorio);
    void deleteLaboratorio(Long id);
}

