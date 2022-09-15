import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ILogin} from "./ILogin";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'https://localhost:7257/api/usuarios/';
  constructor(private http: HttpClient) {}

  login(user: ILogin) {
    return this.http.post(this.baseUrl + 'login', user);
  }

  get getUsername() {
    return localStorage.getItem('userName');
  }

  get isAutenticado() {
    return !!localStorage.getItem('token_value');
  }
}
