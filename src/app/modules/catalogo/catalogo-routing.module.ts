import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleLibroComponent } from './pages/detalle-libro/detalle-libro.component';
import { MostrarCatalogoComponent } from './pages/mostrar-catalogo/mostrar-catalogo.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'libros', component: MostrarCatalogoComponent },
      { path: 'detalle-libro', component: DetalleLibroComponent },
      { path: 'detalle-libro/:id_libro', component: DetalleLibroComponent },
      { path: '**', redirectTo: 'libros' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoRoutingModule {}
