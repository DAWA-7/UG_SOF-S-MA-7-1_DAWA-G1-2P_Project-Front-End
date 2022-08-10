import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/shared/interfaces/carrito';
import { CarritoService } from 'src/app/shared/services/carrito/carrito.service';

@Component({
  selector: 'app-card-carrito',
  templateUrl: './card-carrito.component.html',
  styleUrls: ['./card-carrito.component.css']
})
export class CardCarritoComponent implements OnInit {

 

  constructor(private cartService: CarritoService) { }

  items = this.cartService.getItems()

  cantidad = 1
  contador = 1
  suma(){
    
    this.contador += 1
    this.cantidad = this.contador
  }
  resta(){
    if(this.cantidad >1){
      this.contador -= 1
      this.cantidad = this.contador
    }
    
  }

  //resumencarritoSection
  unidad: Carrito| undefined
  //fin RCS↑
  ngOnInit(): void {
  }

}
