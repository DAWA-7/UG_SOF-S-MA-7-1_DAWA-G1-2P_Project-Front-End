import { Component, Input, OnInit } from '@angular/core';
import { Carrito } from 'src/app/shared/interfaces/carrito';
import { CarritoService } from 'src/app/shared/services/carrito/carrito.service';

@Component({
  selector: 'app-resum-carrito',
  templateUrl: './resum-carrito.component.html',
  styleUrls: ['./resum-carrito.component.css']
})
export class ResumCarritoComponent implements OnInit {

  constructor(private cartService: CarritoService) { }

  items = this.cartService.getItems()
  listPrecios = this.cartService.listPrecio
  countBook = this.items.length
  
  carData = this.cartService.cartData

   
  @Input() inputItem: any;
  
  ngOnInit(): void {
    
    // const elementos = this.items[this.countBook-1].precio
    // const ataPrice = this.listPrecios.push(elementos)
  }


  //NUEVOS METOODOS

  sumaNoTotal(){
    var sumaNoT =0
    for(var i = 0; i< this.inputItem.length; i++){
       sumaNoT += this.inputItem[i].cantidad * this.inputItem[i].precio
    }
    
    
    return sumaNoT
  }

  iva(){
    var iva = this.sumaNoTotal() * 0.12
    return iva.toFixed(2)
  }

  sumaTotal(){
    var sumaTotal = Number(this.sumaNoTotal()) + Number(this.iva())
    return sumaTotal
  }

  //↑
  
  comprar(){
    const carSection = document.getElementById("carSection");
    const paySection = document.getElementById("paySection");
    const datosPago = document.getElementById("datosPago");
    datosPago!.style.fontWeight = "800";
    carSection!.style.display = "none";
    paySection!.style.display = "block"
    
  }

  prePrecio(): number{
    return this.cartService.sumaPrecios()

    //ambas valen
    // const sumAll = this.listPrecios.reduce((acc, item) =>{
    //   return acc = acc + item
    // })
    // console.log(this.cartService.listPrecio)
    // console.log(sumAll)
    // return Number(sumAll.toFixed(2))
  }
  totalSinIva(){
    const iva = 0.12 * this.prePrecio()
    return Number(iva.toFixed(2))
  }

  totalIva(){
    const iva = 0.12 * this.prePrecio()
    const precioTotal = this.prePrecio() + iva
    return Number(precioTotal.toFixed(2))
  }
 
  

}
