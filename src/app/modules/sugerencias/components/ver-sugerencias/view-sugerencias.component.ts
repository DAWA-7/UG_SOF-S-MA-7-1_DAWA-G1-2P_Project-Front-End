import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AgregarSugerenciaComponent } from '../agregar-sugerencia/agregar-sugerencia.component';
import { MatDialog } from '@angular/material/dialog';
import { Sugerencia } from '../../../../shared/interfaces/sugerencia';
import { SugerenciaService } from 'src/app/shared/services/sugerencias/sugerencia.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-sugerencias',
  templateUrl: './view-sugerencias.component.html',
  styleUrls: ['./ver-sugerencias.component.css'],
})
export class ViewSugerenciasComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['nombrePersona', 'apellidoPersona', 'titulo', 'edicion', 'editorial', 'fechaPublicacion','nombreAutor','apellidoAutor']



  constructor(public dialog: MatDialog, private service: SugerenciaService) {
  }


  
  ngOnInit(): void {
    
    this.service.getSugerencias().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<Sugerencia>(data as Sugerencia[]);
      console.log(data);
    },(errorData)=> (alert("Usuario No Autorizado",
    //this.router.navigate(['/'])
    
    )))

  }
  data = [

  ];


  deleteSuggestions(id: number) {
    /*const index = this.data.findIndex((obj) => obj.id_sugerencia === id);
    if (index > -1) {
      this.data.splice(index, 1);
    }
    this.updateDataSource();*/
  }

  updateDataSource() {
    this.dataSource.data = this.data;
  }

  editSuggest(element: any) {
    /*const dialog = this.dialog.open(AgregarSugerenciaComponent, {
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
    });*/
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
