import { CatalogoService } from '../../services/catalogo/catalogo.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent implements OnInit {
  @Input() InputLibros: any;
  //newsItem: any;

  constructor(private _service: CatalogoService) {}

  ngOnInit(): void {
    /*this._service.currentItemLibros.subscribe(
      (newsItem) => (this.newsItem = newsItem)
    );*/
  }

  /*hayLibros(cantidad: number) {
    this._service.estaAgotado(cantidad);
  }*/

  openDetalle(titulo: string) {
    this._service.disparadorDetalle.emit({
      data: this.InputLibros,
    });
    this._service.openLibro(titulo);
  }
}
