import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mockDataNoticias } from 'src/assets/ts/MOCK_DATA_Noticias';
import { iNoticias } from 'src/app/shared/interfaces/noticias';

@Component({
  selector: 'app-noticia-inicio',
  templateUrl: './noticia-inicio.component.html',
  styleUrls: ['./noticia-inicio.component.css'],
})
export class NoticiaInicioComponent implements OnInit {
  // #region Variable Declaration
  listNews: iNoticias[] = mockDataNoticias;
  years = '';
  listYears: String[] = ['2022', '2021'];
  // #endregion

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // #region Functions
  filterNewsByYear(listNews: iNoticias[], listYears: string[]) {}
  // #endregion
}
