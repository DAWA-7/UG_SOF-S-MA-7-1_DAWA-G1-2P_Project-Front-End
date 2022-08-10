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


  //cantidad 

  unidadData(){
    
  }
  //↑


  addToCart(libros: Book){
    this.listLibros.push(libros)
  }

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
 
  
  
  constructor() { }
}
