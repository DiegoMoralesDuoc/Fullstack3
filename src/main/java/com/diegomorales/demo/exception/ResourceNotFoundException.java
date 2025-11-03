package com.diegomorales.demo.exception;


public class ResourceNotFoundException extends RuntimeException {

    /**
     * Constructor con mensaje personalizado.
     * 
     * @param message Descripción del error (ej: "Libro no encontrado con ID: 5").
     */
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
