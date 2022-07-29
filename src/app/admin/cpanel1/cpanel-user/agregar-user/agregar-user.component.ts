import {UsuarioService} from '../../../../shared/services/usuario.service';
import {User} from '../../../../shared/interfaces/user';
import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-user',
  templateUrl: './agregar-user.component.html',
  styleUrls: ['./agregar-user.component.css']
})
export class AgregarUserComponent implements OnInit {

  actionBtn: string = "Guardar"
  userForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private _serviceUsuer: UsuarioService,
              private router: Router, @Inject(MAT_DIALOG_DATA) public editarDatos: any, private dialogRef: MatDialogRef<AgregarUserComponent>) {


  }


  //  @Inject(MAT_DIALOG_DATA) public editarDatos: any ,


  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombres: ['', Validators.required],
      usuario: ['', Validators.required],
      correo: ['', Validators.required],
      contrasenia: ['', Validators.required]
    })


    if (this.editarDatos) {
      this.actionBtn = "Actualizar"
      this.userForm.controls['cedula'].setValue(this.editarDatos.cedula),
        this.userForm.controls['nombres'].setValue(this.editarDatos.nombres),
        this.userForm.controls['usuario'].setValue(this.editarDatos.usuario),
        this.userForm.controls['correo'].setValue(this.editarDatos.correo),
        this.userForm.controls['contrasenia'].setValue(this.editarDatos.contrasenia)
    }


  }

  closeDialog() {
    this.dialogRef.close()
  }

  agregarUsuario() {
    if (!this.editarDatos && this.actionBtn === "Guardar") {
      const user: User  = {
        cedula: this.userForm.value.cedula,
        nombres: this.userForm.value.nombres,
        usuario: this.userForm.value.usuario,
        correo: this.userForm.value.correo,
        contrasenia: this.userForm.value.contrasenia

      }
      this.router.navigate(['/cpanel']).then(() =>
        this.router.navigate(['/cpanel/users'],
          {state: {editarDatos: this._serviceUsuer.agregarUsuario(user)}}))
    } else if (this.actionBtn === "Actualizar") {
      console.log("b")
      const user: User = {
        cedula: this.userForm.value.cedula,
        nombres: this.userForm.value.nombres,
        usuario: this.userForm.value.usuario,
        correo: this.userForm.value.correo,
        contrasenia: this.userForm.value.contrasenia
      }
      this.router.navigate(['/cpanel'])
        .then(() => this.router.navigate(['/cpanel/users'], {state: {editarDatos: this._serviceUsuer.updateUser(user)}}))
    }
    this.dialogRef.close()

    // window.location.reload()
    // this._serviceUsuer.agregarUsuario(user)
    // var reload = window.location.reload

    // this.router.navigate(['/pag'])
    // .then(()=>this.router.navigate(['/'],{state:{editarDatos: this._serviceUsuer.agregarUsuario(user)}}))


    // this._serviceUsuer.agregarUsuario(user)

    // this.router.navigate([''])

  }

  // addUsuario(){
  //   console.log(this.userForm.value)

  // }


}
