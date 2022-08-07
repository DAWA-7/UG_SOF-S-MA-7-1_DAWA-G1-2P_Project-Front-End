import { Categoria } from 'src/app/shared/interfaces/categoria';
import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/shared/services/catalogo/catalogo.service';
import { Book } from 'src/app/shared/interfaces/book';
import { mockDataNoticias } from 'src/assets/ts/MOCK_DATA_Noticias';
import { iNoticias } from 'src/app/shared/interfaces/noticias';
import { NoticiasService } from 'src/app/shared/services/noticias/noticias.service';
import { Router } from '@angular/router';
import {
  mockDataCategoria,
  mockDataLibros,
} from 'src/assets/ts/MOCK_DATA_Libros';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //#region Variables
  listCategorias: Categoria[] = mockDataCategoria;
  listLibros: Book[] = mockDataLibros;
  listNewsHighlight: iNoticias[] = mockDataNoticias;
  //#endregion

  constructor(
    private router: Router,
    private _service: CatalogoService,
    private serviceNoticias: NoticiasService
  ) {}

  ngOnInit(): void {}

  //#region Functions
  filtrarCategoria(
    listLibros: Book[],
    listCategoria: Categoria[],
    categoria: number
  ) {
    return this._service.filtrarCategoria(listLibros, listCategoria, categoria);
  }

  openArticle(itemDataSend: any) {
    this.serviceNoticias.openArticle(itemDataSend);
  }
  //#endregion
}
