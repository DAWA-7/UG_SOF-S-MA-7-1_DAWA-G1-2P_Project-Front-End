import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SugerenciaService {
  baseUrl: string = 'http://localhost:8080/api/Sugerencias';
  constructor(private http: HttpClient) {}

  getSugerencias() {
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'bearer $(auth_token)',
    });
    return this.http.get(this.baseUrl, { headers: header });
    //https://localhost:7263/api/Sugerencias

    //return this.http.get(this.baseUrl);
  }

  getSugerenciasxtitulo(titulo: string) {
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'bearer $(auth_token)',
    });
    return this.http.get(this.baseUrl + '/' + titulo, { headers: header });
    //https://localhost:7263/api/Sugerencias/el
  }
}
