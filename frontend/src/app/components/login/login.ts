import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: 'login.html',
  styleUrls: ['./login.scss']
})
export class Login implements OnInit {
  email: string = '';
  password: string = '';
  remember: boolean = false;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const savedEmail = localStorage.getItem('savedEmail');
    const remember = localStorage.getItem('remember');

    if (remember === 'true' && savedEmail) {
      this.email = savedEmail;
      this.remember = true;
    }
  }

  login(): void {
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      const usuario = usuarios.find(
        u => u.correo === this.email && u.password === this.password
      );

      if (usuario) {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('currentUser', JSON.stringify(usuario));

        if (this.remember) {
          localStorage.setItem('savedEmail', this.email);
          localStorage.setItem('remember', 'true');
        } else {
          localStorage.removeItem('savedEmail');
          localStorage.removeItem('remember');
        }

        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          timer: 1500,
          showConfirmButton: false
        }).then(() => this.router.navigate(['/dashboard']));

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Credenciales incorrectas',
        });
      }
    });
  }

  goToRecuperarPass() {
    this.router.navigate(['/recuperarpass']);
  }
}
