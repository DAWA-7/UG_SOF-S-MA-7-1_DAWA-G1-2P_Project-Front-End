import { AgregarLibroComponent } from './admin/cpanel1/cpanel-libro/agregar-libro/agregar-libro.component';
import { ListarLibroComponent } from './admin/cpanel1/cpanel-libro/listar-libro/listar-libro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUserComponent } from './admin/cpanel1/cpanel-user/listar-user/listar-user.component';
import { CPanelComponent } from './admin/cpanel1/cpanel.component';
import { CPanelHomeComponent } from './admin/cpanel1/cpanel-home/cpanel-home.component';
import { VerSugerenciasComponent } from './admin/cpanel1/cpanel-sugerencias/ver-sugerencias/ver-sugerencias.component';
import { NoticiasListarComponent } from './admin/cpanel1/cpanel-noticias/noticias-listar/noticias-listar.component';

//route
const routes: Routes = [
  {
    path: 'cpanel',
    component: CPanelComponent,
    children: [
      { path: '', component: CPanelHomeComponent },
      { path: 'libros', component: ListarLibroComponent },
      { path: 'agregar-libros', component: AgregarLibroComponent },
      { path: 'users', component: ListarUserComponent },
      { path: 'sugerencias', component: VerSugerenciasComponent },
      { path: 'noticias', component: NoticiasListarComponent },
    ],
  },

  // LogIn: module lazy loading
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/auth/login/login.module').then((m) => m.LoginModule),
  },

  // Register: module lazy loading
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/auth/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },

  // Catalogo: module lazy loading
  {
    path: 'catalogo',
    loadChildren: () =>
      import('./modules/catalogo/catalogo.module').then(
        (m) => m.CatalogoModule
      ),
  },

  // Noticias: module lazy loading
  {
    path: 'noticias',
    loadChildren: () =>
      import('./modules/noticias/noticias.module').then(
        (m) => m.NoticiasModule
      ),
  },

  // Sugerencias: module lazy loading
  {
    path: 'sugerencias',
    loadChildren: () =>
      import('./modules/sugerencias/sugerencias.module').then(
        (m) => m.SugerenciasModule
      ),
  },

  // Carrito: module lazy loading
  {
    path: 'carrito',
    loadChildren: () =>
      import('./modules/carrito/carrito.module').then((m) => m.CarritoModule),
  },

  // CPanel: module lazy loading

  // Home: module lazy loading, needs to be loaded last of all.
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
