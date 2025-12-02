import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaboratoriosService {

  private apiUrl = 'http://localhost:8082/api/laboratorios';

  constructor(private http: HttpClient) {}

  getLaboratorios() {
    return this.http.get(this.apiUrl);
  }
}