package com.diegomorales.demo.Analisis.service;
import java.util.List;
import com.diegomorales.demo.Analisis.model.Analisis;

public interface AnalisisService {
    List<Analisis> getAllAnalisis();
    Analisis getAnalisisById(Long id);
    Analisis createAnalisis(Analisis analisis);
    Analisis updateAnalisis(Long id, Analisis analisis);
    void deleteAnalisis(Long id);
}







