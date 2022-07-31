import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiaArticuloComponent } from './pages/noticia-articulo/noticia-articulo.component';
import { NoticiaInicioComponent } from './pages/noticia-inicio/noticia-inicio.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'inicio', component: NoticiaInicioComponent },
      { path: 'articulo', component: NoticiaArticuloComponent },
      { path: '**', redirectTo: 'inicio' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasRoutingModule {}
