import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CPanelHomeComponent } from './components/cpanel-home/cpanel-home.component';
import { ListarLibroComponent } from './components/cpanel-libro/listar-libro/listar-libro.component';
import { NoticiasListarComponent } from './components/cpanel-noticias/noticias-listar/noticias-listar.component';
import { VerSugerenciasComponent } from './components/cpanel-sugerencias/ver-sugerencias/ver-sugerencias.component';
import { ListarUserComponent } from './components/cpanel-user/listar-user/listar-user.component';
import { CPanelComponent } from './pages/cpanel1/cpanel.component';

const routes: Routes = [
  {
    path: '',
    component: CPanelComponent,
    children: [
      { path: 'dashboard', component: CPanelHomeComponent },
      { path: 'users', component: ListarUserComponent },
      { path: 'libros', component: ListarLibroComponent },
      { path: 'noticias', component: NoticiasListarComponent },
      { path: 'sugerencias', component: VerSugerenciasComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
