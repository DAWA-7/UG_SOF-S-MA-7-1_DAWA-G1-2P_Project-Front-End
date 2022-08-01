import { CatalogoService } from 'src/app/shared/services/catalogo/catalogo.service';
import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css'],
})
export class DetalleLibroComponent implements OnInit {
  InputLibros: any;
  newsItem: any;

  constructor(private _service: CatalogoService, public datepipe: DatePipe) {}

  ngOnInit(): void {
    this._service.currentNewsItem.subscribe(
      (newsItem) => (this.newsItem = newsItem)
    );
    /*this._service.currentNewsItem.subscribe(
      (newCategoria) => (this.newCategoria = newCategoria)
    );*/
    this.InputLibros = this.newsItem;
    //this.InputCategorias = this.newCategoria;
  }

  mostrarCategoria(id: number) {
    return this._service.mostrarCategoria(id);
  }

  format(fecha: Date) {
    return this.datepipe.transform(fecha, 'dd-MM-yyyy');
  }
}
