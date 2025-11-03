package com.diegomorales.demo.Laboratorios.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

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

    @Column(name = "ciudad")
    private String ciudad;    

    @Column(name = "tipoanalisis")
    private String tipoanalisis;


    //Getter and Setter section
    //Getter
    public Long getId(){
        return id;
    }

    public String getNombre(){
        return nombre;
    }

    public String getRegion(){
        return region;
    }

    public String getCiudad (){
        return ciudad;
    }

    public String getTipoanalis(){
        return tipoanalisis;
    }


    //Setter
    public void setId(Long id){
        this.id = id;
    }

    public void setNombre(String nombre){
        this.nombre = nombre ;
    }

    public void setRegion(String region){
        this.region = region;
    }
    
    public void setCiudad(String ciudad){
        this.ciudad = ciudad;
    }

    public void setTipoanalisis(String tipoanalisis){
        this.tipoanalisis = tipoanalisis;
    }
}
