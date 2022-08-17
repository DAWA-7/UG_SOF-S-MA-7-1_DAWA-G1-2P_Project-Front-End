import { CatalogoService } from '../../services/catalogo/catalogo.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent implements OnInit {
  /*@Input() id_libro = 0;
  @Input() autor = '';
  @Input() editorial = '';
  @Input() id_categoria = 0;
  @Input() fecha_publicacion = 12 / 12 / 21;
  @Input() num_paginas = 0;
  @Input() isbn = '';
  @Input() descripcion = '';
  @Input() titulo = '';
  @Input() precio = 10.0;
  @Input() imagen = '';*/
  @Input() InputLibros: any;
  newsItem: any;

  constructor(private router: Router, private _service: CatalogoService) {}

  ngOnInit(): void {
    this._service.currentNewsItem.subscribe(
      (newsItem) => (this.newsItem = newsItem)
    );
  }

  /*hayLibros(cantidad: number) {
    this._service.estaAgotado(cantidad);
  }*/

  openDetalle(itemDataSend: any) {
    this._service.changeNewsItem(itemDataSend);
    this.router.navigate(['/catalogo/detalle-libro']);
  }
}
