import {Injectable} from '@angular/core';

import {Book} from '../../interfaces/book';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ICarrito, PostCarrito} from "../../interfaces/ICarrito";

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  listLibros: Book[] = [];
  unidad: ICarrito[] = []
  existe = false;
  private addCarrito: string = 'https://localhost:7263/api/carrito/add';
  private baseCarrito: string = 'https://localhost:7263/api/carrito/';

  constructor(private http: HttpClient) {

  }

  addNewElementCarrito(carrito: PostCarrito) {
    return this.http.post<ICarrito>(this.addCarrito, carrito);
  }

  getCarrito1(libro: any) {
    var username = localStorage.getItem('userName');
    return this.http.get<ICarrito>(this.baseCarrito + 'getLibroPerUser/' + username + '/' + libro.id)
  }

  deleteCarrito(id: number) {
    return this.http.delete(this.baseCarrito + 'deleteCarrito/' + id)
  }

  getToken() {
    let auth_token = localStorage.getItem('token_value');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    });
  }

  listPrecio = [0]

  //cantidad

  getCantidad() {
    return this.unidad
  }

  //↑


  pushprecio(precio: any) {
    this.listPrecio.push(precio)
  }


  addToCart(libros: Book) {
    this.listLibros.push(libros)
  }


  sumaPrecios() {
    const sumAll = this.listPrecio.reduce((acc, item) => {
      return acc = acc + item
    })
    return Number(sumAll.toFixed(2))

  }

  sumTotal() {
    const iva = 0.12 * this.sumaPrecios()
    const precioTotal = this.sumaPrecios() + iva
    return Number(precioTotal.toFixed(2))
  }

  // deleteCard(libros: Book){
  //   this.listLibros.splice(libros)
  // }

  itemCount() {
    return this.listLibros.length
  }

  getItems() {
    return this.listLibros
  }

  exist(libros: any) {
    var bookfind = this.listLibros.find(libro => libro.autor == libros.autor)

    if (bookfind) {
      this.existe = true
    } else {
      this.existe = false
    }
    return this.existe
  }

  returnPrice() {

  }


}
