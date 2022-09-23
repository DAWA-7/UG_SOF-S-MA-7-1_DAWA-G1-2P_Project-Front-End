import { Injectable } from '@angular/core';
import { Carrito } from '../../interfaces/carrito';
import { mockDataLibros } from 'src/assets/ts/MOCK_DATA_Libros';
import { Book } from '../../interfaces/book';
import { find } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  listLibros: Book[] = [];
  unidad: Carrito[] = []
  existe = false
  constructor(private http: HttpClient) { }
  urlCarrito = "https://localhost:7263/api/FACTURA_DETALLE/";
  listPrecio = [0]


  cartData: Carrito[] = [ 
    {id:1, tituloLibro: "Los tres mosqueteros", nombreAutor: "Elza", ApellidoAutor: "Pato", cantidad: 2, precio: 3.00 },
    {id:2, tituloLibro: "La Odisea", nombreAutor: "Homero", ApellidoAutor: "Simpson", cantidad: 1, precio: 5.00 }
]
  //cantidad 


  //metodos nuevos para carrito ↓


  //Nuevo ↑
 
  
  getCantidad(){
    return this.unidad
  }
  //↑

  cargarInfoApi(){
    return this.http.get(this.urlCarrito)
  }
  
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

  exist(libros: Book){
    var bookfind = this.listLibros.find(libro => libro.autor == libros.autor)
    
    if(bookfind){
      this.existe = true
    }
    else{
      this.existe = false
    }
    return this.existe
  }

 
  



  
  
 
}
