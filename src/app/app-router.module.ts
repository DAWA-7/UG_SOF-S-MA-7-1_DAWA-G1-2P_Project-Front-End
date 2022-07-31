import { AgregarLibroComponent } from './admin/cpanel1/cpanel-libro/agregar-libro/agregar-libro.component';
import { ListarLibroComponent } from './admin/cpanel1/cpanel-libro/listar-libro/listar-libro.component';
import { AgregarUserComponent } from './admin/cpanel1/cpanel-user/agregar-user/agregar-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { MostrarCatalogoComponent } from './modules/catalogo/mostrar-catalogo/mostrar-catalogo.component';
import { ListarUserComponent } from './admin/cpanel1/cpanel-user/listar-user/listar-user.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { DetalleLibroComponent } from './modules/catalogo/detalle-libro/detalle-libro.component';
import { CPanelComponent } from './admin/cpanel1/cpanel.component';
import { CPanelHomeComponent } from './admin/cpanel1/cpanel-home/cpanel-home.component';
import { ModuleComponent } from './modules/module.component';
import { CarritoCompraComponent } from './modules/carrito-compra/carrito-compra.component';
import { SugerenciaComponent } from './modules/sugerencias/sugerencia/sugerencia.component';
import { VerSugerenciasComponent } from './admin/cpanel1/cpanel-sugerencias/ver-sugerencias/ver-sugerencias.component';
import { NoticiasListarComponent } from './admin/cpanel1/cpanel-noticias/noticias-listar/noticias-listar.component';

//route
const routes: Routes = [
  {
    path: '',
    component: ModuleComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'home', component: HomeComponent },
      { path: 'catalogo', component: MostrarCatalogoComponent },
      { path: 'detalle-libro', component: DetalleLibroComponent },
      { path: 'sugerencias', component: SugerenciaComponent },
      { path: 'carrito-compras', component: CarritoCompraComponent },
    ],
  },
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

  // Noticias: module lazy loading
  {
    path: 'noticias',
    loadChildren: () =>
      import('./modules/noticias/noticias.module').then(
        (m) => m.NoticiasModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
