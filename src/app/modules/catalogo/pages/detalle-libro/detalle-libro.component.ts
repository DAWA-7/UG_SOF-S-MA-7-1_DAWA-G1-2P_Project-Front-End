import {ActivatedRoute} from '@angular/router';
import {CatalogoService} from 'src/app/shared/services/catalogo/catalogo.service';
import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Book} from 'src/app/shared/interfaces/book';
import {CarritoService} from 'src/app/shared/services/carrito/carrito.service';
import {ICarrito, PostCarrito} from "../../../../shared/interfaces/ICarrito";

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css'],
})
export class DetalleLibroComponent implements OnInit {
  /****** ESTA PARTE ESTA POR SER BORRADA*/
  InputLibros: any;
  newsItem: any;
  public isAddedCarrito: boolean = false;
  public respuesta: any;
  private actualCarrito: ICarrito | null = null;
  /****** */

  listDetalle: any;

  constructor(
    private _service: CatalogoService,
    public datepipe: DatePipe,
    private route: ActivatedRoute,
    private cartService: CarritoService
  ) {

  }

  ngOnInit(): void {
    this._service.currentItemLibros.subscribe(
      (newsItem) => (this.newsItem = newsItem)
    );
    this.InputLibros = this.newsItem;
    this.cartService.getCarrito1(this.InputLibros).subscribe(data => {
      if (data.id != 0 && data.IdLibro != 0) {
        this.actualCarrito = data;
        console.log(data);
        this.isAddedCarrito = true;
        console.log("Carga de datos: "+ this.isAddedCarrito)

      }
    }, error => {
      console.log("Error al obtener los datos")
      this.isAddedCarrito = false;
    });
  }

  format(fecha: Date) {
    return this.datepipe.transform(fecha, 'dd-MM-yyyy');
  }

  //parte agreagada por Dávila↓ REVISAR
  libros: Book | undefined;

  addCart() {
    if (this.actualCarrito != null) {
      console.log("elimina")
      this.cartService.deleteCarrito(this.actualCarrito.id).subscribe();
      this.actualCarrito = null;
      this.isAddedCarrito = false;
    } else {
      this.cartService.pushprecio(this.InputLibros.precio)
      this.cartService.addToCart(this.InputLibros);
      window.alert('Libro añadido a tu carrito');
      if (this.InputLibros != null) {
        const username = localStorage.getItem('userName');
        if (username != null) {
          const cart: PostCarrito = {
            IdLibro: this.InputLibros.id,
            Username: username,
            Cantidad: 1
          };
          this.cartService.addNewElementCarrito(cart).subscribe(value => {
            this.isAddedCarrito = true;
            this.actualCarrito = value;
          });
        }
      }
    }
  }

  /*  if (this.cartService.exist(this.InputLibros)) {
    window.alert('Ya añadiste este libro a tu carrito');
  } else {
    this.cartService.addToCart(this.InputLibros);
    window.alert('Libro añadido a tu carrito');
  }*/

  //fin parte agregada por Dávila↑
}
