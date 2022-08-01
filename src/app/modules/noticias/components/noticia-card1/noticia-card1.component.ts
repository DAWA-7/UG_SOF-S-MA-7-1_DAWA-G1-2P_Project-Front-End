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

  constructor(private router: Router, private data: NoticiasService) {}

  ngOnInit(): void {
    this.data.currentNewsItem.subscribe(
      (newsItem) => (this.newsItem = newsItem)
    );
  }

  // #region Functions
  openArticle(itemDataSend: any) {
    this.data.changeNewsItem(itemDataSend);
    this.router.navigate(['noticias/articulo']);
  }
  // #endregion
}
