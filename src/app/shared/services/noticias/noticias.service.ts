import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  //#region Variables
  private sourceItemNoticias = new BehaviorSubject<string>('default message');
  currentItemNoticias = this.sourceItemNoticias.asObservable();
  //#region
  constructor(private router: Router) {}

  //#region Functions
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
  //#endregion
}
