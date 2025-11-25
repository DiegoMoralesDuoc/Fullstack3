package com.diegomorales.demo.Control_Usuarios.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diegomorales.demo.Control_Usuarios.model.Usuario;
import com.diegomorales.demo.Control_Usuarios.repository.UsuarioRepository;
import com.diegomorales.demo.exception.ResourceNotFoundException;

import java.util.List;

@Service
public class UsuarioServiceImpl implements UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public List<Usuario> getAllUsuarios(){
        return usuarioRepository.findAll();
    }

    @Override
    public Usuario getUsuarioById(Long id) {
        return usuarioRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado con id: " + id));
    }

    @Override
    public Usuario createUsuario(Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    @Override
    public Usuario updateUsuario(Long id, Usuario usuario) {
        return usuarioRepository.findById(id)
            .map(existing -> {
                if (usuario.getNombre() != null) existing.setNombre(usuario.getNombre());
                if (usuario.getApellidos() != null) existing.setApellidos(usuario.getApellidos());
                if (usuario.getCorreo() != null) existing.setCorreo(usuario.getCorreo());
                if (usuario.getPassword() != null) existing.setPassword(usuario.getPassword());

                return usuarioRepository.save(existing);
            })
            .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado con id: " + id));
    }

    @Override
    public void deleteUsuario(Long id){
        usuarioRepository.deleteById(id);
    }
}