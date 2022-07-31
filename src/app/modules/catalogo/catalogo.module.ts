import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MostrarCatalogoComponent } from './pages/mostrar-catalogo/mostrar-catalogo.component';
import { DetalleLibroComponent } from './pages/detalle-libro/detalle-libro.component';

@NgModule({
  declarations: [MostrarCatalogoComponent, DetalleLibroComponent],
  imports: [CommonModule, CatalogoRoutingModule, SharedModule],
})
export class CatalogoModule {}
