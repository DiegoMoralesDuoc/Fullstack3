package com.diegomorales.demo.Libreria.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Libro")
public class Libro {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "autor")
    private String autor;

    @Column(name = "fechapublicacion")
    private int fechapublicacion;

    @Column(name = "genero")
    private String genero;


    //Getter and Setter section
    //Getter
    public Long getId(){
        return id;
    }

    public String getTitulo(){
        return titulo;
    }

    public String getAutor(){
        return autor;
    }

    public int getFechapublicacion (){
        return fechapublicacion;
    }

    public String getGenero(){
        return genero;
    }


    //Setter
    public void setId(Long id){
        this.id = id;
    }

    public void setTitulo(String titulo){
        this.titulo = titulo ;
    }

    public void setAutor(String autor){
        this.autor = autor;
    }
    
    public void setFechapublicacion(int fechapublicacion){
        this.fechapublicacion = fechapublicacion;
    }

    public void setGenero(String genero){
        this.genero = genero;
    }
}
