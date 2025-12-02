import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Analisis } from '../models/analisis';

@Injectable({
  providedIn: 'root'
})
export class AnalisisService {

  private apiUrl = 'http://localhost:8082/analisis';  // Ajusta si tu backend usa otro puerto

  constructor(private http: HttpClient) {}

  // GET: Listar todos los análisis
  getAnalisis(): Observable<Analisis[]> {
    return this.http.get<Analisis[]>(this.apiUrl);
  }

  // GET: Obtener análisis por ID
  getAnalisisById(id: number): Observable<Analisis> {
    return this.http.get<Analisis>(`${this.apiUrl}/${id}`);
  }

  // POST: Crear análisis
  createAnalisis(analisis: Analisis): Observable<Analisis> {
    return this.http.post<Analisis>(this.apiUrl, analisis);
  }

  // PUT: Actualizar análisis
  updateAnalisis(id: number, analisis: Analisis): Observable<Analisis> {
    return this.http.put<Analisis>(`${this.apiUrl}/${id}`, analisis);
  }

  // DELETE: Eliminar análisis
  deleteAnalisis(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
