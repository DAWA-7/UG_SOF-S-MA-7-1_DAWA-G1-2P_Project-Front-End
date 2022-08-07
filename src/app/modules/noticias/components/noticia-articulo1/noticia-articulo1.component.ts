import { Component, Input, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/shared/services/noticias/noticias.service';

@Component({
  selector: 'app-noticia-articulo1',
  templateUrl: './noticia-articulo1.component.html',
  styleUrls: ['./noticia-articulo1.component.css'],
})
export class NoticiaArticulo1Component implements OnInit {
  //#region Variable declarations
  // @Input() itemDataInput: any;
  itemDataInput: any;
  newsItem: any;
  //#endregion

  constructor(private data: NoticiasService) {}

  ngOnInit(): void {
    this.data.currentItemNoticias.subscribe(
      (newsItem) => (this.newsItem = newsItem)
    );
    this.itemDataInput = this.newsItem;
  }
}
