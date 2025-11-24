import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { JsonService } from '../../services/json.service';

    /**
    * Componente que registra, 
    * muestra
    * modifica
    * y elimina laboratorios
    */


    /**
    * Interfaces de usuario y laboratorios
    */

interface Usuario {
  name: string;
  email: string;
  rol: string;
}

interface Laboratorio {
  nombre: string;
  region: string;
  comuna: string;
  direccion: string;
  jefe: string;
}

@Component({
  selector: 'app-laboratorios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './laboratorios.html',
  styleUrls: ['./laboratorios.scss']
})

    /**
    * Se obtiene la información de la cual se requiere trabajar
    * la region y comuna se obtiene de un json en un git
    */

export class Laboratorios implements OnInit {
  laboratorioForm!: FormGroup;
  laboratorios: Laboratorio[] = [];
  jefes: Usuario[] = [];
  showAdminSection: boolean = false;
  regiones: string[] = [];
  comunasPorRegion: { [region: string]: string[] } = {};
  comunasFiltradas: string[] = [];

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

      this.laboratorios = JSON.parse(localStorage.getItem('laboratorios') || '[]');
    } else {
      this.jefes = [];
      this.laboratorios = [];
    }

    /**
    * Se validan los campos requeridos
    */

    this.laboratorioForm = this.fb.group({
      nombre: ['', Validators.required],
      region: ['', Validators.required],
      comuna: ['', Validators.required],
      direccion: ['', Validators.required],
      jefe: ['', Validators.required]
    });

    /**
    * Se obtiene la informacion de regiones y comunas por regiones 
    * por jsonservice
    */    

      this.jsonService.getRegionesYComunas().subscribe(data => {
      this.comunasPorRegion = {};
      this.regiones = [];

      data.forEach(item => {
        this.regiones.push(item.region);
        this.comunasPorRegion[item.region] = item.comunas;
      });
    });

    /**
    * Cambia las comunas en caso que otra region haya sido seleccionada
    */    
    this.laboratorioForm.get('region')?.valueChanges.subscribe(() => {
      this.onRegionChange();
    });
  }


  onRegionChange() {
    const regionSeleccionada = this.laboratorioForm.get('region')?.value;
    this.comunasFiltradas = this.comunasPorRegion[regionSeleccionada] || [];
    this.laboratorioForm.patchValue({ comuna: '' });
  }

  agregarLaboratorio() {
    if (this.laboratorioForm.valid) {
      this.laboratorios.push(this.laboratorioForm.value);
      localStorage.setItem('laboratorios', JSON.stringify(this.laboratorios));
      this.laboratorioForm.reset();
    }
  }

  eliminarLaboratorio(nombre: string) {
    if (confirm('¿Seguro que quieres eliminar este laboratorio?')) {
      this.laboratorios = this.laboratorios.filter(p => p.nombre !== nombre);
      localStorage.setItem('laboratorios', JSON.stringify(this.laboratorios));
    }
  }
}
