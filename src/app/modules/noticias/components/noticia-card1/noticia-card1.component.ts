import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiasService } from 'src/app/shared/services/noticias/noticias.service';

@Component({
  selector: 'app-noticia-card1',
  templateUrl: './noticia-card1.component.html',
  styleUrls: ['./noticia-card1.component.css'],
})
export class NoticiaCard1Component implements OnInit {
  // #region Variable Declaration
  @Input() itemDataInput: any;
  contentShort: string = '';
  newsItem: any;
  // #endregion

  constructor(
    private router: Router,
    private serviceNoticias: NoticiasService
  ) {}

  ngOnInit(): void {
    this.serviceNoticias.currentItemNoticias.subscribe(
      (newsItem) => (this.newsItem = newsItem)
    );
  }

  // #region Functions
  openArticle(itemDataSend: any) {
    this.serviceNoticias.openArticle(itemDataSend);
  }

  TestAPI() {
    this.serviceNoticias.APIGetNoticia().subscribe((data) => {
      console.log(data);
    });
  }

  // #endregion
}
