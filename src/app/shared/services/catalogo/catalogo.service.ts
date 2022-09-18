import { Categoria } from '../../interfaces/book';
import { Injectable } from '@angular/core';
import { Book } from '../../interfaces/book';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  private sourceItemLibros = new BehaviorSubject<string>('default message');
  currentItemLibros = this.sourceItemLibros.asObservable();

  categoria = 0;
  agotado = false;

  listCategorias: Categoria[] = [];

  listLibros: Book[] = [];

  API_LIBROS: string = 'https://localhost:7263/api/Libros/';

  API_CATEGORIAS: string = 'https://localhost:7263/GetCategorias/';

  constructor(private router: Router, private http: HttpClient) {}

  /*getLibros() {
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `bearer ${auth_token}`,
    });

    return this.http.get(this.API_SERVER, { headers: header });
  }*/

  getLibros(): Observable<any> {
    return this.http.get(this.API_LIBROS);
  }

  getCategorias(): Observable<any> {
    return this.http.get(this.API_CATEGORIAS);
  }
  /**************************/
  getLibro() {
    this.getLibros().subscribe(
      (data) => {
        console.log(data);
        this.listLibros = data;
      },
      (error) => {
        console.log(error);
      }
    );
    //return this.listLibros.slice();
  }

  getCategoria() {
    this.getCategorias().subscribe(
      (data) => {
        console.log(data);
        this.listCategorias = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  listarCategorias() {
    return this.listCategorias;
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
    this.sourceItemLibros.next(newsItem);
  }

  filtrarCategoria(categoria: number) {
    var id = this.listCategorias.find(
      (categ) => categ.id_categoria == categoria
    );
    var libros = this.listLibros.filter(
      (libro) => libro.id_categoria === id?.id_categoria
    );

    if (categoria > 0) {
      libros;
    } else if (categoria == 0) {
      var libros = this.listLibros;
    }
    console.log(categoria);
    console.log(id);
    console.log(libros);
    return libros;
  }

  mostrarCategoria(id: number) {
    var nom = this.listCategorias.find((categ) => categ.id_categoria == id);
    console.log(nom?.nombre_categoria);
    return nom?.nombre_categoria;
  }

  /*estaAgotado(cantidad: number) {
    if (cantidad == 0) {
      return true;
    } else {
      return false;
    }
  }*/
  //#region Functions
  changeItemLibros(newItemLibros: any) {
    this.sourceItemLibros.next(newItemLibros);
  }

  openLibro(itemDataSend: any) {
    this.changeItemLibros(itemDataSend);
    var regexpReplaceSpace = / /g;
    var regexpOnlyLetter = /[^a-zA-Z0-9 ]/g;
    var newName = itemDataSend.titulo.replace(regexpOnlyLetter, '');
    var newName = newName.replace(regexpReplaceSpace, '_');
    this.router.navigate(['catalogo/detalle-libro/', newName]);
  }
}
