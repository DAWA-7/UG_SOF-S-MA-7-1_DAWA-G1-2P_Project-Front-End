import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //#region Variables
  dataSource = new MatTableDataSource<any>;

  //#endregion

  constructor( public daialog: MatDialog) { }

  ngOnInit(): void {
  }

}
