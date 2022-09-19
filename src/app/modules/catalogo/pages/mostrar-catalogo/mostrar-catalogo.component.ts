import { CatalogoService } from 'src/app/shared/services/catalogo/catalogo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-catalogo',
  templateUrl: './mostrar-catalogo.component.html',
  styleUrls: ['./mostrar-catalogo.component.css'],
})
export class MostrarCatalogoComponent implements OnInit {
  // #region Variables
  categoria = 0;
  listCategorias: any = this.listarCategoria();
  //listLibros: Book[] = [];
  // #endregion

  constructor(private _service: CatalogoService) {}

  ngOnInit(): void {
    this._service.getLibro();
    this._service.getCategoria();
  }

  //#region Functions
  filtrarCategoria(categoria: number) {
    return this._service.filtrarCategoria(categoria);
  }

  listarCategoria() {
    this._service.getCategorias().subscribe(
      (data) => {
        this.listCategorias = data;
      },
      (error) => {
        console.log(error);
      }
    );
    return this.listCategorias;
  }
  //#endregion
}
