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
  newsItem: any;

  constructor(private router: Router, private _service: CatalogoService) {}

  ngOnInit(): void {
    this._service.currentItemLibros.subscribe(
      (newsItem) => (this.newsItem = newsItem)
    );
  }

  /*hayLibros(cantidad: number) {
    this._service.estaAgotado(cantidad);
  }*/

  openDetalle(itemDataSend: any) {
    this._service.changeNewsItem(itemDataSend);
    this.router.navigate(['catalogo/detalle-libro/']);
    /*this._service.disparadorDetalle.emit({
      data: this.InputLibros,
    });
    this._service.openLibro(titulo);*/
  }
}
