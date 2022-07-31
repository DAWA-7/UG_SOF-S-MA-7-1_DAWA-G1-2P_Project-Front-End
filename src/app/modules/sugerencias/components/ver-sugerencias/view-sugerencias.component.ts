import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AgregarSugerenciaComponent } from '../agregar-sugerencia/agregar-sugerencia.component';
import { MatDialog } from '@angular/material/dialog';
import { Sugerencia } from '../../../../shared/interfaces/sugerencia';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-sugerencias',
  templateUrl: './view-sugerencias.component.html',
  styleUrls: ['./ver-sugerencias.component.css'],
})
export class ViewSugerenciasComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = [
    'id_sugerencia',
    'nombreLibro',
    'autor',
    'fecha',
    'ci_solicitante',
    'isbn',
    'modificar',
  ];

  constructor(public dialog: MatDialog, public datepipe: DatePipe) {}

  data = [
    {
      id_sugerencia: 1,
      nombreLibro: 'El principito',
      autor: 'Una persona',
      fecha: '2014/02/27',
      ci_solicitante: '0258974512',
      isbn: '44-55-5-441',
    },
    {
      id_sugerencia: 2,
      nombreLibro: 'DOS',
      autor: 'otra persona',
      fecha: '2014/02/27',
      ci_solicitante: '025894444512',
      isbn: '5515-1515-3565',
    },
    {
      id_sugerencia: 3,
      nombreLibro: ' TRES',
      autor: 'Una persona',
      fecha: '2014/02/27',
      ci_solicitante: '0258888512',
      isbn: '5858-12-35-15',
    },
  ];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Sugerencia>(
      this.data as Sugerencia[]
    );
  }

  deleteSuggestions(id: number) {
    const index = this.data.findIndex((obj) => obj.id_sugerencia === id);
    if (index > -1) {
      this.data.splice(index, 1);
    }
    this.updateDataSource();
  }

  updateDataSource() {
    this.dataSource.data = this.data;
  }

  editSuggest(element: any) {
    const dialog = this.dialog.open(AgregarSugerenciaComponent, {
      data: element,
    });

    dialog.afterClosed().subscribe((obj) => {
      const result = obj.data;
      const suggest = this.data.find((suggest) => suggest.isbn == result.isbn);
      console.log(suggest);
      if (suggest != null) {
        const index = this.data.findIndex(
          (suggestInden) => suggestInden.isbn == result.isbn
        );
        this.data[index] = result;
        this.updateDataSource();
      }
    });
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  formatDate(element: any) {
    const date = new Date(element);
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }
}
