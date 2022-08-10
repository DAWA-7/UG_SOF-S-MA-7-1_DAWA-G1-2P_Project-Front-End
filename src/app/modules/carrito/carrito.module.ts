import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarritoCompraComponent } from './pages/carrito-compra/carrito-compra.component';
import { CarritoSectionComponent } from './components/carrito-section/carrito-section.component';
import { CardCarritoComponent } from './components/card-carrito/card-carrito.component'; 
@NgModule({
  declarations: [CarritoCompraComponent, CarritoSectionComponent, CardCarritoComponent],
  imports: [CommonModule, CarritoRoutingModule, SharedModule],
})
export class CarritoModule {}
