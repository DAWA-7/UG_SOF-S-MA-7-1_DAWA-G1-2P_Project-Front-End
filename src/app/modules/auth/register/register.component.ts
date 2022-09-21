import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {WindowModelService} from "../../../shared/services/window-model.service";
import {AuthService} from "../../../shared/interfaces/Login/auth.service";
import {IRegister} from "../../../shared/interfaces/Login/IRegister";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public frmLogin: FormGroup;
  public hide: boolean = true;
  date = new FormControl(new Date());
  public isRegistered: boolean = false;

  constructor(private authC: AuthService, private formBuilder: FormBuilder, private router: Router, private service: WindowModelService) {
    this.frmLogin = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.email]
    });

  }

  onSubmit(nombres: string, apellidos: string, usuario: string, contrasena: string, email: string) {
    const register: IRegister = {
      nombre: nombres,
      apellido: apellidos,
      username: usuario,
      password: contrasena,
      email: email
    }
    console.log("pasa")
    this.authC.register(register).subscribe((data:any) =>{
      this.isRegistered = true;
      this.service.$modal.emit(usuario);
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 3000)
    }, error => {
      this.isRegistered = false;
    });

  }


  getErrorMessage() {
    if (this.frmLogin != null) {
      if (this.frmLogin.get('email')!.hasError('required')) {
        return 'Debe introducir un E-mail.';
      }

      return this.frmLogin.get('email')!.hasError('email') ? 'E-mail invalido.' : '';
    }
    return '';
  }

}
