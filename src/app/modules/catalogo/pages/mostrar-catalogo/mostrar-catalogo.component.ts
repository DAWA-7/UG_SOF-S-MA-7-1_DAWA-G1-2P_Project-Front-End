import { CatalogoService } from 'src/app/shared/services/catalogo/catalogo.service';
import { Categoria } from '../../../../shared/interfaces/categoria';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../../../shared/interfaces/book';
import { LibroComponent } from 'src/app/shared/components/libro/libro.component';
import { mockDataLibros } from 'src/assets/ts/MOCK_DATA_Libros';
import { mockDataCategoria } from 'src/assets/ts/MOCK_DATA_Libros';

@Component({
  selector: 'app-mostrar-catalogo',
  templateUrl: './mostrar-catalogo.component.html',
  styleUrls: ['./mostrar-catalogo.component.css'],
})
export class MostrarCatalogoComponent implements OnInit {
  // #region Variables
  categoria = 0;
  listCategorias: Categoria[] = mockDataCategoria;
  listLibros: Book[] = mockDataLibros;
  // #endregion

  constructor(private _service: CatalogoService) {}

  ngOnInit(): void {}

  /*applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/

  //#region Functions
  filtrarCategoria(
    listLibros: Book[],
    listCategoria: Categoria[],
    categoria: number
  ) {
    return this._service.filtrarCategoria(listLibros, listCategoria, categoria);
  }
  //#endregion
}
