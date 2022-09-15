import { User } from './app/shared/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'https://localhost:7257/api/Usuarios/';
  constructor(private http: HttpClient) {}

  login(user: User) {
    return this.http.post(this.baseUrl + 'Login', user);
  }

  get getUsername() {
    return localStorage.getItem('userName');
  }

  get isAutenticado() {
    return !!localStorage.getItem('token_value');
  }
}
