package com.diegomorales.demo.Control_Usuarios.service;
import java.util.List;
import com.diegomorales.demo.Control_Usuarios.model.Usuario;

public interface UsuarioService {
    List<Usuario> getAllUsuarios();
    Usuario getUsuarioById(Long id);
    Usuario createUsuario(Usuario usuario);
    Usuario updateUsuario(Long id, Usuario usuario);
    void deleteUsuario(Long id);
}
