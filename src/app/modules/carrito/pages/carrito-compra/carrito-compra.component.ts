import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/shared/services/carrito/carrito.service';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {

  constructor(private cartService: CarritoService) { }

  ngOnInit(): void {
  }

  carData = this.cartService.cartData
  devVal(){
    return this.carData
  }

  

}
