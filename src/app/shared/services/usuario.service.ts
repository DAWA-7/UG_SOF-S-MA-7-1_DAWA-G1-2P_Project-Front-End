import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  ELEMENT_DATA: User[] = [
    {
      cedula: 9000000000,
      nombres: 'Andres Davila',
      usuario: 'andresdav',
      correo: 'andres.davila@ug.edu.ec',
      contrasenia: '12345',
    },
    {
      cedula: 9111111111,
      nombres: 'Helen bernal',
      usuario: 'helenber',
      correo: 'helen.bernal@ug.edu.ec',
      contrasenia: '12345',
    },
    {
      cedula: 9222222222,
      nombres: 'Nefi Reyes',
      usuario: 'nefirey',
      correo: 'nefi.reyes@ug.edu.ec',
      contrasenia: '12345',
    },
    {
      cedula: 1234567890,
      nombres: 'Renán Pérez',
      usuario: 'renanper',
      correo: 'rehan.perezb@ug.edu.ec',
      contrasenia: '12345',
    },
  ];

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
