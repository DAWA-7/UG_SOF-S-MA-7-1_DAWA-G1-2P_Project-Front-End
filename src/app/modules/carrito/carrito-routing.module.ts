import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoCompraComponent } from './pages/carrito-compra/carrito-compra.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'compra', component: CarritoCompraComponent },
      { path: '**', redirectTo: 'compra' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarritoRoutingModule {}
