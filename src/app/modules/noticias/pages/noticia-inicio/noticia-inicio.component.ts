import { Component, OnInit } from '@angular/core';

import { iNoticias } from 'src/app/shared/interfaces/noticias';
import { NoticiasService } from 'src/app/shared/services/noticias/noticias.service';
import { mockDataNoticias } from 'src/assets/ts/MOCK_DATA_Noticias';

@Component({
  selector: 'app-noticia-inicio',
  templateUrl: './noticia-inicio.component.html',
  styleUrls: ['./noticia-inicio.component.css'],
})
export class NoticiaInicioComponent implements OnInit {
  // #region Variable Declaration
  listNoticiasAPI: any;
  listNoticias: iNoticias[] = [];
  listYears: string[] = [];
  // listNoticias: iNoticias[] = mockDataNoticias.sort((a, b) =>
  //   // sort array by date descending
  //   this.stringToDate(a.date) > this.stringToDate(b.date) ? -1 : 1
  // );

  // // returns a Set of: year of an object
  // listYears = Array.from(
  //   new Set(
  //     this.listNoticias.map(function (obj) {
  //       // returns last 4 characters of string
  //       return obj.date.slice(obj.date.length - 4);
  //     })
  //   )
  //   // sort string number from highest to lower
  // ).sort((a, b) => (a > b ? -1 : 1));

  year = '';
  searchTitle = '';
  value = '';
  // #endregion

  constructor(private serviceNoticias: NoticiasService) {
    // this.listYears.unshift('Mostrar todo');
  }

  ngOnInit(): void {
    this.serviceNoticias.APIGetNoticia().subscribe((data) => {
      // remplazar mock data
      this.listNoticiasAPI = data;
      this.listNoticias = this.listNoticiasAPI.sort(
        (a: { date: string }, b: { date: string }) =>
          this.stringToDate(a.date) > this.stringToDate(b.date) ? -1 : 1
      );
      console.log(this.listNoticiasAPI);

      this.listYears = Array.from(
        new Set(
          this.listNoticias.map(function (obj) {
            // returns last 4 characters of string
            return obj.date.slice(obj.date.length - 4);
          })
        )
        // sort string number from highest to lower
      ).sort((a, b) => (a > b ? -1 : 1));

      this.listYears.unshift('Mostrar todo');
    });
  }

  // #region Functions
  filterByYearNoticias(
    listNoticias: iNoticias[],
    year: string,
    searchTitle: string
  ) {
    var listFiltered;
    // Ignore accent in char
    searchTitle = searchTitle.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (searchTitle != '') {
      listFiltered = listNoticias.filter((obj) =>
        obj.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
      this.year = '';
    } else if (year == 'Mostrar todo' || year == '') {
      listFiltered = listNoticias;
    } else {
      listFiltered = listNoticias.filter(
        (obj) => obj.date.slice(obj.date.length - 4) === year
      );
    }
    return listFiltered;
  }

  stringToDate(date: string) {
    const [day, month, year] = date.split('/');
    const dateObject = new Date(+year, +month, +day);
    return dateObject;
  }

  //API----------------------------------------------------------------

  // #endregion
}
