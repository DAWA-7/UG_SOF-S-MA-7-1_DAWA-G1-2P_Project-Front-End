import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { WindowModelService } from '../../../shared/services/window-model.service';
import { UsuarioService } from '../../../shared/services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public frmLogin: FormGroup;
  public error: boolean = false;

  constructor(
    private service: WindowModelService,
    private router: Router,
    private _dataUser: UsuarioService,
    private formBuilder: FormBuilder
  ) {
    this.frmLogin = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /*@Input()
  Usuarios: any;*/
  ngOnInit(): void {}

  onSubmit(usuario: string, password: String) {
    var user = this._dataUser.getUserByCedula(usuario);
    if (user != null && user.contrasenia == password) {
      this.router.navigate(['/home']);
      this.service.$modal.emit(user.usuario);
    } else {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 5000);
    }
  }
}
