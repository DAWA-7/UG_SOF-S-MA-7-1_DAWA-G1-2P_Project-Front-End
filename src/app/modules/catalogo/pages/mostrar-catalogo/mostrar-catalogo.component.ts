import { CatalogoService } from 'src/app/shared/services/catalogo/catalogo.service';
import { Categoria } from '../../../../shared/interfaces/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-catalogo',
  templateUrl: './mostrar-catalogo.component.html',
  styleUrls: ['./mostrar-catalogo.component.css'],
})
export class MostrarCatalogoComponent implements OnInit {
  // #region Variables
  categoria = 0;
  //listCategorias: Categoria[] = [];
  //listLibros: Book[] = [];
  // #endregion

  constructor(private _service: CatalogoService) {}

  ngOnInit(): void {
    this._service.getLibro();
    this._service.getCategoria();
    //console.log(this.listCategorias);
  }

  //#region Functions
  filtrarCategoria(categoria: number) {
    return this._service.filtrarCategoria(categoria);
  }

  listarCategoria() {
    return this._service.listarCategorias();
  }
  //#endregion
}
