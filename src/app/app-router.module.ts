import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//route
const routes: Routes = [
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
  {
    path: 'cpanel',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },

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
