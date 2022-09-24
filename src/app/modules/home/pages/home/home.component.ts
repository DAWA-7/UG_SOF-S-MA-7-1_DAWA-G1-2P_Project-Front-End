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
  listCategorias: Categoria[] = [];
  listLibros: any = this.listarLibros();
  listNoticiasAPI: any;
  listNoticias: iNoticias[] = [];
  //listNoticias: iNoticias[] = mockDataNoticias;
  listCarousel: { imgSrc: string; imgAlt: string; carousel: string }[] = [
    { imgSrc: 'slide1.png', imgAlt: 'feria', carousel: 'active' },
    { imgSrc: 'slide2.png', imgAlt: 'descuento', carousel: '' },
    { imgSrc: 'slide3.png', imgAlt: 'semana-libro', carousel: '' },
  ];
  //#endregion

  constructor(
    private router: Router,
    private _service: CatalogoService,
    private serviceNoticias: NoticiasService
  ) {}

  ngOnInit(): void {
    this._service.getLibro();
    this.serviceNoticias.APIGetNoticia().subscribe((data) => {
      this.listNoticiasAPI = data;
      this.listNoticias = this.listNoticiasAPI;
    });
  }

  //#region Functions
  listarLibros() {
    this._service.getLibros().subscribe(
      (data) => {
        this.listLibros = data;
      },
      (error) => {
        console.log(error);
      }
    );
    return this.listLibros;
  }

  openArticle(itemDataSend: any) {
    this.serviceNoticias.openArticle(itemDataSend);
  }
  //#endregion
}
