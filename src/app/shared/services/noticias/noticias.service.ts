import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  //#region Variables
  private newsItemSource = new BehaviorSubject<string>('default message');
  currentNewsItem = this.newsItemSource.asObservable();
  //#region
  constructor() {}

  //#region Functions
  changeNewsItem(newsItem: any) {
    this.newsItemSource.next(newsItem);
  }
  //#endregion
}
