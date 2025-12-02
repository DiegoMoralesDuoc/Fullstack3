import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { JsonService } from '../../services/json.service';

/* Conexion con backend */
import { Analisis } from '../../models/analisis';
import { AnalisisService } from '../../services/analisis.service';
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

export class AnalisisComponent implements OnInit {
  analisiForm!: FormGroup;
  analisis: Analisis[] = [];
  jefes: Usuario[] = [];
  showAdminSection: boolean = false;

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object,
    private jsonService: JsonService,
    private analisisService: AnalisisService
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const user = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
      this.showAdminSection = !!(user && (user.rol === 'admin' || user.rol === 'jefatura'));

      const usuarios: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
      this.jefes = usuarios.filter(u => u.rol === 'jefatura');

    this.analisisService.getAnalisis().subscribe(data => {
      this.analisis = data.map(a => ({
        ...a,
        fechaCreacion: new Date(a.fechaCreacion)
      }));
    });

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
        const nuevoAnalisis: Analisis = {
          ...this.analisiForm.value,
          fechaCreacion: new Date().toISOString()
        };

      this.analisisService.createAnalisis(nuevoAnalisis).subscribe(res => {
        this.analisis.push(res);
        this.analisiForm.reset();
        });
      }
    }

      eliminarAnalisi(id: number) {
        if (confirm('¿Seguro que quieres eliminar este análisis?')) {
          this.analisisService.deleteAnalisis(id).subscribe(() => {
            this.analisis = this.analisis.filter(a => a.id !== id);
            });
        }
      }
  }
  

