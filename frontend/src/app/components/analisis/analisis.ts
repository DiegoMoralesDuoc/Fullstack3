import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { JsonService } from '../../services/json.service';

    /**
    * Componente que registra, 
    * muestra
    * modifica
    * y elimina analisis
    * 
    * PD Queda como "analisi" para que quede en singular y no en plural "analisis"
    */


    /**
    * Interfaces de usuario y analisis
    */

interface Usuario {
  name: string;
  email: string;
  rol: string;
}

interface Analisi {
  nombre: string;
  tipo: string;
  fechaCreacion: Date;
}

@Component({
  selector: 'app-analisis',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './analisis.html',
  styleUrls: ['./analisis.scss']
})

    /**
    * Se obtiene la información de la cual se requiere trabajar
    * la region y comuna se obtiene de un json en un git
    */

export class Analisis implements OnInit {
  analisiForm!: FormGroup;
  analisis: Analisi[] = [];
  jefes: Usuario[] = [];
  showAdminSection: boolean = false;

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object,
    private jsonService: JsonService
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const user = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
      this.showAdminSection = !!(user && (user.rol === 'admin' || user.rol === 'jefatura'));

      const usuarios: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
      this.jefes = usuarios.filter(u => u.rol === 'jefatura');

      this.analisis = (JSON.parse(localStorage.getItem('analisis') || '[]'))
        .map((a: any) => ({
          ...a,
          fechaCreacion: new Date(a.fechaCreacion)
        }));

    } else {
      this.analisis = [];
    }

    /**
    * Se validan los campos requeridos
    */

    this.analisiForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
    });
  }

  agregarAnalisi() {
    if (this.analisiForm.valid) {
      const nuevoAnalisi: Analisi = {
        ...this.analisiForm.value,
        fechaCreacion: new Date()
        };

      this.analisis.push(nuevoAnalisi);
      localStorage.setItem('analisis', JSON.stringify(this.analisis));
      this.analisiForm.reset();
    }
  }

  eliminarAnalisi(nombre: string) {
    if (confirm('¿Seguro que quieres eliminar este analisis?')) {
      this.analisis = this.analisis.filter(p => p.nombre !== nombre);
      localStorage.setItem('analisis', JSON.stringify(this.analisis));
    }
  }
}
