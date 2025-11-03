package com.diegomorales.demo.Control_Usuarios.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.diegomorales.demo.Control_Usuarios.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
    
}
