import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
    private http: HttpClient,
    private router: Router
  ) {}

  recuperar() {

    this.http.post('http://localhost:8080/usuarios/recuperar', {
      correo: this.email
    }).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Correo enviado',
          text: 'Revisa tu bandeja de entrada'
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Correo no registrado',
          text: 'No existe un usuario con ese correo'
        });
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
