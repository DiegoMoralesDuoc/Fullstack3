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

    @Column(name = "comuna")
    private String comuna;    

    @Column(name = "direccion")
    private String direccion;    

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

    public String getComuna (){
        return comuna;
    }

    public String getDireccion (){
        return direccion;
    }
    public String getTipoanalisis(){
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
    
    public void setComuna(String comuna){
        this.comuna = comuna;
    }

    public void setDireccion(String direccion){
        this.direccion = direccion;
    }

    public void setTipoanalisis(String tipoanalisis){
        this.tipoanalisis = tipoanalisis;
    }
}
