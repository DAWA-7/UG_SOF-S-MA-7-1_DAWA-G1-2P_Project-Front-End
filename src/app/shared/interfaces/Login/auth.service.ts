import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from './ILogin';
import { IRegister } from './IRegister';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'http://localhost:8080/api/Login';
  regirsterUrl: string = 'http://localhost:8080/api/register';
  constructor(private http: HttpClient) {}

  login(user: ILogin) {
    return this.http.post(this.baseUrl, user);
  }

  register(registerData: IRegister) {
    return this.http.post(this.regirsterUrl, registerData);
  }

  get getUsername() {
    return localStorage.getItem('userName');
  }

  get isAutenticado() {
    return !!localStorage.getItem('token_value');
  }
}
