import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { mockDataNoticias } from 'src/assets/ts/MOCK_DATA_Noticias';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  //#region Variables
  private sourceItemNoticias = new BehaviorSubject<string>('default message');
  currentItemNoticias = this.sourceItemNoticias.asObservable();

  UrlGetDatosNoticias: string = 'http://localhost:8080/GetDatosNoticias';
  UrlPutDelete: string = 'http://localhost:8080/GetDeleteNoticia/';

  //#region

  constructor(private router: Router, private http: HttpClient) {}

  //#region Functions
  getDataArticle() {}

  changeItemNoticias(newItemNoticias: any) {
    this.sourceItemNoticias.next(newItemNoticias);
  }

  openArticle(itemDataSend: any) {
    this.changeItemNoticias(itemDataSend);
    var regexpReplaceSpace = / /g;
    var regexpOnlyLetter = /[^a-zA-Z0-9 ]/g;
    var newName = itemDataSend.title.replace(regexpOnlyLetter, '');
    var newName = newName.replace(regexpReplaceSpace, '_');
    this.router.navigate(['noticias/articulo/', newName]);
  }

  // API ----------------------------------------------------------
  APIGetNoticia() {
    return this.http.get(this.UrlGetDatosNoticias);
  }

  APIDeleteNoticia(id: number) {
    return this.http.get(this.UrlPutDelete + id + '');
  }

  //#endregion
}
