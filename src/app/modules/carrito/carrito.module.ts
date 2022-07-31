import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarritoCompraComponent } from './pages/carrito-compra/carrito-compra.component';
import { CarritoSectionComponent } from './components/carrito-section/carrito-section.component';

@NgModule({
  declarations: [CarritoCompraComponent, CarritoSectionComponent],
  imports: [CommonModule, CarritoRoutingModule, SharedModule],
})
export class CarritoModule {}
