import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { JsonService } from '../../services/json.service';

/* Conexion con backend */

import { LaboratorioService } from '../../services/laboratorios.service';
import { Laboratorio } from '../../models/laboratorio';

    /**
    * Componente que registra, muestra, modifica y elimina laboratorios
    */


@Component({
  selector: 'app-laboratorios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './laboratorios.html',
  styleUrls: ['./laboratorios.scss']
})

export class Laboratorios implements OnInit {
  laboratorioForm!: FormGroup;
  laboratorios: Laboratorio[] = [];
  regiones: string[] = [];
  comunasPorRegion: { [region: string]: string[] } = {};
  comunasFiltradas: string[] = [];
  showAdminSection: boolean = false;

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object,
    private jsonService: JsonService,
    private laboratorioService: LaboratorioService
  ) {}

  ngOnInit(): void {

    this.laboratorioForm = this.fb.group({
      nombre: ['', Validators.required],
      region: ['', Validators.required],
      comuna: ['', Validators.required],
      direccion: ['', Validators.required],
      tipoanalisis: ['', Validators.required]
    });

    this.jsonService.getRegionesYComunas().subscribe(data => {
      data.forEach(item => {
        this.regiones.push(item.region);
        this.comunasPorRegion[item.region] = item.comunas;
      });
    });

    this.laboratorioForm.get('region')?.valueChanges.subscribe(() => {
      this.onRegionChange();
    });
    this.cargarLaboratorios();
  }

  cargarLaboratorios() {
    this.laboratorioService.getLaboratorios().subscribe(data => {
      this.laboratorios = data;
    });
  }

  onRegionChange() {
    const regionSeleccionada = this.laboratorioForm.get('region')?.value;
    this.comunasFiltradas = this.comunasPorRegion[regionSeleccionada] || [];
    this.laboratorioForm.patchValue({ comuna: '' });
  }

  agregarLaboratorio() {
    if (this.laboratorioForm.valid) {
      this.laboratorioService.createLaboratorio(this.laboratorioForm.value)
        .subscribe(nuevoLab => {
          this.laboratorios.push(nuevoLab);
          this.laboratorioForm.reset();
        });
    }
  }

  eliminarLaboratorio(id: number) {
    if (confirm('¿Seguro que quieres eliminar este laboratorio?')) {
      this.laboratorioService.deleteLaboratorio(id).subscribe(() => {
        this.laboratorios = this.laboratorios.filter(l => l.id !== id);
      });
    }
  }
}