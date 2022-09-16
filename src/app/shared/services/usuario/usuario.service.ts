import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
import { mockDataUsuarios } from 'src/assets/ts/MOCK_DATA_Usuarios';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
//para backend






  baseUrl: string = "https://localhost:7257/api/sugerencias";


  constructor(private http: HttpClient) {}

  getData(){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':  `bearer ${auth_token}`
    })
    return this.http.get(this.baseUrl, {headers: header})
  }
  //↑
  ELEMENT_DATA: User[] = mockDataUsuarios;
  getUsuario() {
    return this.ELEMENT_DATA.slice();
  }

  agregarUsuario(usuario: User) {
    this.ELEMENT_DATA.unshift(usuario);
  }

  updateUser(data: User) {
    var cedula = this.ELEMENT_DATA.find((user) => user.cedula == data.cedula);
    if (data.cedula == cedula?.cedula) {
      var index = this.ELEMENT_DATA.findIndex(
        (user) => user.cedula == data.cedula
      );
      this.ELEMENT_DATA[index] = data;
    }
  }

  getUserByCedula(usuario: string) {
    return this.ELEMENT_DATA.find((user) => user.usuario == usuario);
  }
}
