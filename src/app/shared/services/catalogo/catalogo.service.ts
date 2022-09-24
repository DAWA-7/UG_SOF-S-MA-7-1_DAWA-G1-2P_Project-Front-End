import { Categoria } from '../../interfaces/book';
import { Injectable, Output, EventEmitter } from '@angular/core';
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
  @Output() disparadorDetalle: EventEmitter<any> = new EventEmitter();

  categoria = 0;
  agotado = false;

  listCategorias: Categoria[] = [];

  listLibros: Book[] = [];

  API_LIBROS: string = 'http://localhost:8080/api/Libros/';

  API_CATEGORIAS: string = 'http://localhost:8080/GetCategorias/';

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

  getLibroDetalle(titulo: string): Observable<any> {
    //var regexpReplaceSpace = / /g;
    //var regexpOnlyLetter = /[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s0-9 ]/g;
    //var parametro = titulo.replace(regexpOnlyLetter, '');
    //var parametro = parametro.replace(regexpReplaceSpace, '_');
    this.router.navigate(['catalogo/detalle-libro/', titulo]);
    return this.http.get('https://localhost:7263/' + titulo + '');
  }

  openLibro(titulo: string) {
    var titulo = titulo.replace(/\s+/g, '-');
    this.getLibroDetalle(titulo).subscribe(
      (data) => {
        this.listLibros = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  changeNewsItem(newsItem: any) {
    this.sourceItemLibros.next(newsItem);
  }

  //#region Functions
  changeItemLibros(newItemLibros: any) {
    this.sourceItemLibros.next(newItemLibros);
  }

  getCategoria() {
    this.getCategorias().subscribe(
      (data) => {
        this.listCategorias = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /*getDetalle(id: number) {
    this.getLibro;
    this.findLibro(id);
  }*/

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

  /*findLibro(id: number) {
    var libro = this.listLibros.find((libro) => libro.id_libro == id);
    return this.listLibros[id];
  }*/
  getFiltro(categ: number): Observable<any> {
    //var categ = categ.replace(/\s+/g, '-');
    //this.router.navigate(['catalogo/', categ]);
    return this.http.get(
      'https://localhost:7263/buscarCategoria/' + categ + ''
    );
  }

  filtrarCategoria(id: number) {
    if (id > 0) {
      this.getFiltro(id).subscribe(
        (data) => {
          this.listLibros = data;
        },
        (error) => {
          console.log(error);
        }
      );
      //libros;
    } else if (id == 0) {
      this.getLibro();
    }
    return this.listLibros;
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
}
