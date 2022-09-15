import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  baseUrl: string = 'https://localhost:7257/api/Clientes/';
  constructor(private http: HttpClient) {}

  getLibros() {
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `bearer ${auth_token}`,
    });

    return this.http.get(this.baseUrl, { headers: header });
  }
}
