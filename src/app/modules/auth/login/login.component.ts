import {Component, Input, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {WindowModelService} from '../../../shared/services/window-model.service';
import {UsuarioService} from '../../../shared/services/usuario/usuario.service';
import {AuthService} from "../../../shared/interfaces/Login/auth.service";
import {ILogin} from "../../../shared/interfaces/Login/ILogin";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public frmLogin: FormGroup;
  public error: boolean = false;
  public auth: AuthService;

  constructor(
    private service: WindowModelService,
    private router: Router,
    private _dataUser: UsuarioService,
    private formBuilder: FormBuilder,
    private authC: AuthService,
  ) {
    this.auth = authC;
    this.frmLogin = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /*@Input()
  Usuarios: any;*/
  ngOnInit(): void {
  }

  onSubmit(usuario: string, password: string) {
    const login: ILogin = {
      username: usuario,
      password: password,
    };

    this.auth.login(login).subscribe((data: any) => {
      localStorage.setItem('userName', usuario);
      localStorage.setItem('token_value', data);
      this.router.navigate(['/home']);
      this.service.$modal.emit(usuario);
      return;
    }, error1 => {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 5000);
    });
    /*    if (value != null){
          localStorage.setItem('userName',usuario);
          localStorage.setItem('toker_value',value);
        }*/
    /*const user = this._dataUser.getUserByCedula(usuario);
    if (user != null && user.contrasenia == password) {
      this.router.navigate(['/home']);
      this.service.$modal.emit(user.usuario);
    } else {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 5000);
    }*/
  }
}
