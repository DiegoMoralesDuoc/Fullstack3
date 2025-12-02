import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JsonService } from '../../services/json.service';
import { UsuarioService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario';

    /**
    * Componente que registra nuevos usuarios
    */


    /**
    * interfaz de usuario
    */

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
  imports: [FormsModule, CommonModule]
})
export class Register implements OnInit {
  nombre: string = '';
  apellidos: string = '';
  correo: string = '';
  password: string = '';
  rol: string = '';
  alerta: { mensaje: string; tipo: 'success' | 'danger' | 'warning' } | null = null;

  roles: string[] = [];

  constructor(
    private router: Router,
    private jsonService: JsonService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    if (!currentUser || (currentUser.rol !== 'Admin' && currentUser.rol !== 'Jefatura')) {
      alert('No tienes permiso para registrar usuarios');
      this.router.navigate(['/dashboard']);
      return;
    }

    // Traer roles desde JSON
    this.jsonService.getRol().subscribe({
      next: (data) => {
        this.roles = data;
        this.rol = this.roles[0]; // rol por defecto
      },
      error: (err) => console.error(err)
    });
  }

  mostrarAlerta(mensaje: string, tipo: 'success' | 'danger' | 'warning' = 'success') {
    this.alerta = { mensaje, tipo };
    setTimeout(() => (this.alerta = null), 5000);
  }

  validarContrasena(password: string): boolean {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  }

  registrarUsuario() {
    if (!this.nombre.trim() || !this.apellidos.trim() || !this.correo.trim() || !this.password) {
      this.mostrarAlerta('Por favor completa todos los campos.', 'danger');
      return;
    }

    if (!this.validarContrasena(this.password)) {
      this.mostrarAlerta(
        'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo.',
        'danger'
      );
      return;
    }

    const nuevoUsuario: Usuario = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      correo: this.correo,
      password: this.password,
      rol: this.rol,
    };

    // Guardar en backend
    this.usuarioService.createUsuario(nuevoUsuario).subscribe({
      next: () => {
        this.mostrarAlerta('Usuario registrado exitosamente.', 'success');
        this.limpiarFormulario();
      },
      error: (err) => {
        console.error(err);
        this.mostrarAlerta('Error al registrar usuario.', 'danger');
      }
    });
  }

  limpiarFormulario() {
    this.nombre = '';
    this.apellidos = '';
    this.correo = '';
    this.password = '';
    this.rol = this.roles.length ? this.roles[0] : '';
  }
}