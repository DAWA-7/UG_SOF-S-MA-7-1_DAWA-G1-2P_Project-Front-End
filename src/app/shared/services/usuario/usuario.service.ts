import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
import { mockDataUsuarios } from 'src/assets/ts/MOCK_DATA_Usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  ELEMENT_DATA: User[] = mockDataUsuarios;

  constructor() {}

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
