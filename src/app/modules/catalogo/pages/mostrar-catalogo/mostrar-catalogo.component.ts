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
  listLibros: any = [];
  // #endregion

  constructor(private _service: CatalogoService) {}

  ngOnInit(): void {
    this._service.getLibro();
    this._service.getCategoria();
    this.listLibros = this.filtrarCategoria(0);
  }

  //#region Functions
  filtrarCategoria(categoria: number) {
    this.listLibros = this._service.filtrarCategoria(categoria);
    return this.listLibros;
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
