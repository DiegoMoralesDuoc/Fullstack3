package com.diegomorales.demo.Laboratorios.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import com.diegomorales.demo.Control_Usuarios.model.Usuario;

@Entity
@Table(name = "Laboratorio")
public class Laboratorio {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "region")
    private String region;

    @Column(name = "comuna")
    private String comuna;    

    @Column(name = "direccion")
    private String direccion;    

    @Column(name = "tipoanalisis")
    private String tipoanalisis;

    // Relación con usuario jefe
    @ManyToOne
    @JoinColumn(name = "jefe_id")
    private Usuario jefe;

    // Getters
    public Long getId() { return id; }
    public String getNombre() { return nombre; }
    public String getRegion() { return region; }
    public String getComuna() { return comuna; }
    public String getDireccion() { return direccion; }
    public String getTipoanalisis() { return tipoanalisis; }
    public Usuario getJefe() { return jefe; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public void setRegion(String region) { this.region = region; }
    public void setComuna(String comuna) { this.comuna = comuna; }
    public void setDireccion(String direccion) { this.direccion = direccion; }
    public void setTipoanalisis(String tipoanalisis) { this.tipoanalisis = tipoanalisis; }
    public void setJefe(Usuario jefe) { this.jefe = jefe; }
}
