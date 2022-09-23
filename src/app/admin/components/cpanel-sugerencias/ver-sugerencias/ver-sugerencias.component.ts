import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Sugerencia} from "../../../../shared/interfaces/sugerencia";
import {MatDialog} from "@angular/material/dialog";
import {UsuarioService} from 'src/app/shared/services/usuario/usuario.service';


@Component({
  selector: 'app-ver-sugerencias',
  templateUrl: './ver-sugerencias.component.html',
  styleUrls: ['./ver-sugerencias.component.css']
})

export class VerSugerenciasComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['id_sugerencia', 'nombreLibro', 'autor', 'fecha', 'ci_solicitante', 'modificar']

  ngOnInit(): void {

    this.serviceUs.getData().subscribe((datas: Object) => {
      this.dataSource = new MatTableDataSource<Sugerencia>(datas as Sugerencia[]);
    })

  }

  constructor(public dialog: MatDialog, private serviceUs: UsuarioService) {
  }

  data = [{
    id_sugerencia: 1,
    nombreLibro: "El principito",
    autor: "Una persona",
    fecha: "15/02/2014",
    ci_solicitante: 258974512,
  },
    {
      id_sugerencia: 2,
      nombreLibro: "DOS",
      autor: "otra persona",
      fecha: "16/02/2014",
      ci_solicitante: 25894444512,
    },
    {
      id_sugerencia: 3,
      nombreLibro: " TRES",
      autor: "Una persona",
      fecha: "17/02/2014",
      ci_solicitante: 258888512,
    }
  ];


  deleteSuggestions(id: number) {
    const index = this.data.findIndex(obj => obj.id_sugerencia === id);
    if (index > -1) {
      this.data.splice(index, 1);
    }
    this.updateDataSource();
  }


  showBack() {
    console.log(this.serviceUs.getData())
  }

  updateDataSource() {
    this.dataSource.data = this.data;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
