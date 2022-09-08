import { Injectable } from '@angular/core';
import { Carrito } from '../../interfaces/carrito';
import { mockDataLibros } from 'src/assets/ts/MOCK_DATA_Libros';
import { Book } from '../../interfaces/book';
import { find } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  listLibros: Book[] = [];
  unidad: Carrito[] = []
  existe = false
  constructor() { }
  listPrecio = [0]
  //cantidad 
  
  getCantidad(){
    return this.unidad
  }
  //↑

  
  pushprecio(precio: any){
    this.listPrecio.push(precio)
  }

  
  addToCart(libros: Book){
    this.listLibros.push(libros)
  }


  sumaPrecios(){
    const sumAll = this.listPrecio.reduce((acc, item) =>{
      return acc = acc + item
    })
    return Number(sumAll.toFixed(2))
    
  }
  sumTotal(){
    const iva = 0.12 * this.sumaPrecios()
    const precioTotal = this.sumaPrecios() + iva
    return Number(precioTotal.toFixed(2))
  }
  // deleteCard(libros: Book){
  //   this.listLibros.splice(libros)
  // }

  itemCount(){
    return this.listLibros.length
  }

  getItems(){
    return this.listLibros
  }

  exist(libros: any){
    var bookfind = this.listLibros.find(libro => libro.autor == libros.autor)
    
    if(bookfind){
      this.existe = true
    }
    else{
      this.existe = false
    }
    return this.existe
  }

  returnPrice(){
    
  }
  



  
  
 
}
