import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { News } from 'src/app/shared/interfaces/news';
import { mockDataNews } from 'src/assets/ts/MOCK_DATA_News';

@Component({
  selector: 'app-noticias-listar',
  templateUrl: './noticias-listar.component.html',
  styleUrls: ['./noticias-listar.component.css'],
})
export class NoticiasListarComponent implements OnInit {
  //#region Variables
  dataSource = new MatTableDataSource<any>;
  listNews: News[] = [];
  displayedColumns: string[] = [
    'id',
    'title',
    'author',
    'date', 
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
    this.listNews = mockDataNews;
    this.dataSource = new MatTableDataSource (this.listNews)
  }

  //#region Functions
  openDialog() {}

  applyFilter(event: Event) {}

  //#endregion
}
