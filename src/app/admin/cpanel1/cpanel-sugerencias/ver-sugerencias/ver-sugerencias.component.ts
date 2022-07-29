import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Sugerencia} from "../../../../shared/interfaces/sugerencia";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-ver-sugerencias',
  templateUrl: './ver-sugerencias.component.html',
  styleUrls: ['./ver-sugerencias.component.css']
})

export class VerSugerenciasComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['id_sugerencia', 'nombreLibro', 'autor', 'fecha', 'ci_solicitante', 'modificar']

  constructor(public dialog: MatDialog) {
  }

  data = [{
    id_sugerencia: 1,
    nombreLibro: "El principito",
    autor: "Una persona",
    fecha: "15/02/2014",
    ci_solicitante: "0258974512",
  },
    {
      id_sugerencia: 2,
      nombreLibro: "DOS",
      autor: "otra persona",
      fecha: "16/02/2014",
      ci_solicitante: "025894444512",
    },
    {
      id_sugerencia: 3,
      nombreLibro: " TRES",
      autor: "Una persona",
      fecha: "17/02/2014",
      ci_solicitante: "0258888512",
    }
  ];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Sugerencia>(this.data as Sugerencia[]);
    console.log(this.data);
  }

  deleteSuggestions(id: number) {
    const index = this.data.findIndex(obj => obj.id_sugerencia === id);
    if (index > -1) {
      this.data.splice(index, 1);
    }
    this.updateDataSource();
  }

  updateDataSource() {
    this.dataSource.data = this.data;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
