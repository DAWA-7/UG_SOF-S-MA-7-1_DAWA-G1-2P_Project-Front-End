import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from 'src/app/shared/services/catalogo/catalogo.service';
import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Book } from 'src/app/shared/interfaces/book';
import { CarritoService } from 'src/app/shared/services/carrito/carrito.service';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css'],
})
export class DetalleLibroComponent implements OnInit {
  /****** ESTA PARTE ESTA POR SER BORRADA*/
  InputLibros: any;
  newsItem: any;
  public respuesta: any;
  /****** */

  listDetalle: any;

  constructor(
    private _service: CatalogoService,
    public datepipe: DatePipe,
    private route: ActivatedRoute,
    private cartService: CarritoService
  ) {}

  ngOnInit(): void {
    this._service.currentItemLibros.subscribe(
      (newsItem) => (this.newsItem = newsItem)
    );
    this.InputLibros = this.newsItem;

    /*this._service.disparadorDetalle.subscribe((data) => {
      this.listDetalle = data;
      console.log(this.listDetalle);
      return this.listDetalle;
    });*/
    /*this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.getDetalleLibro(params.variable);
    });*/
  }

  format(fecha: Date) {
    return this.datepipe.transform(fecha, 'dd-MM-yyyy');
  }

  //parte agreagada por Dávila↓ REVISAR
  libros: Book | undefined;
  addCart() {
    console.log(this.InputLibros);

    if (this.cartService.exist(this.InputLibros)) {
      window.alert('Ya añadiste este libro a tu carrito');
    } else {
      this.cartService.addToCart(this.InputLibros);
      window.alert('Libro añadido a tu carrito');
    }
  }

  //fin parte agregada por Dávila↑
}
