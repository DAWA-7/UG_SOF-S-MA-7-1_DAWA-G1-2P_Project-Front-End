import { Categoria } from '../../interfaces/categoria';
import { Injectable } from '@angular/core';
import { Book } from '../../interfaces/book';
import { BehaviorSubject } from 'rxjs';
import { mockDataCategoria } from 'src/assets/ts/MOCK_DATA_Libros';
import { mockDataLibros } from 'src/assets/ts/MOCK_DATA_Libros';
@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  private newsItemSource = new BehaviorSubject<string>('default message');
  currentNewsItem = this.newsItemSource.asObservable();

  categoria = 0;

  listCategorias: Categoria[] = mockDataCategoria;

  listLibros: Book[] = mockDataLibros;

  constructor() {}

  getLibro() {
    return this.listLibros.slice();
  }
  agregarLibro(data: Book) {
    this.listLibros.unshift(data);
  }

  updateLibro(data: Book) {
    var id = this.listLibros.find((libro) => libro.id_libro == data.id_libro);
    if (data.id_libro == id?.id_libro) {
      var index = this.listLibros.findIndex(
        (libro) => libro.id_libro == data.id_libro
      );
      this.listLibros[index] = data;
    }
  }

  findLibro(id: number) {
    var libro = this.listLibros.find((libro) => libro.id_libro == id);
    return this.listLibros[id];
  }

  changeNewsItem(newsItem: any) {
    this.newsItemSource.next(newsItem);
  }

  filtrarCategoria(
    listLibros: Book[],
    listCategoria: Categoria[],
    categoria: number
  ) {
    var id = listCategoria.find((categ) => categ.id_categoria == categoria);
    var libros = listLibros.filter(
      (libro) => libro.id_categoria === id?.id_categoria
    );

    if (categoria > 0) {
      libros;
    } else if (categoria == 0) {
      var libros = listLibros;
    }
    //var resultado = this.categoria >= 0 ? libros : listLibros;
    console.log(categoria);
    console.log(id);
    console.log(libros);
    /*
    var lib = listLibros.filter((libro) => {
      if (libro.id_categoria === id?.id_categoria) {
        return libro;
      }
    });*/
    return libros;
  }

  mostrarCategoria(id: number) {
    var nom = this.listCategorias.find((categ) => categ.id_categoria == id);
    console.log(nom?.nombre_categoria);
    return nom?.nombre_categoria;
  }
}
