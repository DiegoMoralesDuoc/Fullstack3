import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'http://localhost:8082/api/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get(this.apiUrl);
  }
}