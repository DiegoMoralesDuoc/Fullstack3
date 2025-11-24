import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperarpass',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recuperarpass.html',
  styleUrls: ['./recuperarpass.scss']
})
export class RecuperarPass  {
  email: string = '';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  recuperar() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const usuario = usuarios.find((u: any) => u.email === this.email);

    if (!usuario) {
      Swal.fire({
        icon: 'error',
        title: 'Correo no encontrado',
        text: 'No existe una cuenta asociada a este correo'
      });
      return;
    }

    Swal.fire({
      icon: 'info',
      title: 'Contraseña encontrada',
      text: `Tu contraseña es: ${usuario.password}`
    });
  }

      goToLogin() {
        this.router.navigate(['/login']);
      }
}
