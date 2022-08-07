import { Component, Input, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/shared/services/noticias/noticias.service';

@Component({
  selector: 'app-card-noticias',
  templateUrl: './card-noticias.component.html',
  styleUrls: ['./card-noticias.component.css'],
})
export class CardNoticiasComponent implements OnInit {
  //#region Variables
  @Input() inputItem: any;
  //#endregion

  constructor(private serviceNoticias: NoticiasService) {}

  ngOnInit(): void {}

  //#region Functions
  openArticle(itemDataSend: any) {
    this.serviceNoticias.openArticle(itemDataSend);
  }
  //#endregion
}
