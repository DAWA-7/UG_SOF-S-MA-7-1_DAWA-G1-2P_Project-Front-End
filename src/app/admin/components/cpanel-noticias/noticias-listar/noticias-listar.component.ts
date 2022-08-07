import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { iNoticias } from 'src/app/shared/interfaces/noticias';
import { mockDataNoticias } from 'src/assets/ts/MOCK_DATA_Noticias';

@Component({
  selector: 'app-noticias-listar',
  templateUrl: './noticias-listar.component.html',
  styleUrls: ['./noticias-listar.component.css'],
})
export class NoticiasListarComponent implements OnInit {
  //#region Variables
  dataSource = new MatTableDataSource<any>;
  listNews: iNoticias[] = [];
  displayedColumns: string[] = [
    'id',
    'title',
    'author',
    'date', 
    'opciones',
  ];
  displayedColumns2: {nameInterface: string, nameToShow: string}[] = [
    { nameInterface: 'id', nameToShow: 'ID' },
    { nameInterface: 'title', nameToShow: 'Título' },
    { nameInterface: 'author', nameToShow: 'Autor' },
    { nameInterface: 'date', nameToShow: 'Fecha' },
  ];
  //#endregion

  constructor(private dialog: MatDialog ) {}

  ngOnInit(): void {
    this.listNews = mockDataNoticias;
    this.dataSource = new MatTableDataSource (this.listNews)
  }

  //#region Functions
  openDialog() {}

  applyFilter(event: Event) {}

  //#endregion
}
