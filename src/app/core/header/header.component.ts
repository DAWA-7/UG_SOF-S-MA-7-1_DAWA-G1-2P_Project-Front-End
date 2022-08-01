import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { WindowModelService } from '../../shared/services/window-model.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // Variable declarations
  listNavItem: { name: string; address: string }[] = [
    { name: 'Inicio', address: '/home' },
    { name: 'Catalogo', address: '/catalogo' },
    { name: 'Noticias', address: '/noticias' },
    { name: 'Sugerencias', address: '/sugerencias' },
  ];
  listOptions: string[] = ['Perfil', 'Configuración'];
  userName: String = '';
  /*  ----------------- */
  // isActiveInicio = true;
  // isActiveCatalogo = false;
  // isActiveNoticias = false;
  // isActiveSugerencias = false;
  // listSections = ['Inicio', 'Catálogo', 'Noticias', 'Sugerencias'];
  // isLogged!: boolean;

  constructor(
    private service: WindowModelService,
    // private dialog: MatDialog,
    private router: Router
  ) {
    this.service.$modal.subscribe((valor) => {
      this.userName = valor;
      console.log('valor: ' + valor);
    });
  }

  ngOnInit(): void {}

  //#region Functions
  openSignUp(): void {
    this.router.navigate(['/register']);
    // this.dialog.open(SignupComponent, { data: { signupName: titleForm } }); //[signupName]="Random name"
  }

  openLogIn() {
    if (this.router != null) {
      this.router.navigate(['login']);
    }
  }

  openLogOut() {
    this.router.navigate(['/home']);
    this.service.$modal.emit(false);
  }

  openCPanel() {
    this.router.navigate(['/cpanel']);
  }

  // ! Mantener constante al usuario logeado hasta que salga

  // navigateTo(module: string) {
  //   this.isActiveInicio = false;
  //   this.isActiveCatalogo = false;
  //   this.isActiveNoticias = false;
  //   this.isActiveSugerencias = false;
  //   switch (module) {
  //     case 'Inicio':
  //       this.router.navigate(['/home']);
  //       this.isActiveInicio = true;
  //       break;
  //     case 'Catálogo':
  //       this.router.navigate(['//mostrar-catalogo']);
  //       this.isActiveCatalogo = true;
  //       break;
  //     case 'Noticias':
  //       this.router.navigate(['/noticias']);
  //       this.isActiveNoticias = true;
  //       break;
  //   }
  // }

  // cerrarSesion() {
  //   this.router.navigate(['/home']);
  //   this.service.$modal.emit(false);
  // }

  // sendLogin(): void {
  //   if (this.router != null) {
  //     this.router.navigate(['login']);
  //   }
  // }
  //#endregion
}
