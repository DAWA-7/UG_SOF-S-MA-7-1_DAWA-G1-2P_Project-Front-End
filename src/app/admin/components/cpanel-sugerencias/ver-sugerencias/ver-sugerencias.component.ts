import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Sugerencia} from "../../../../shared/interfaces/sugerencia";
import {MatDialog} from "@angular/material/dialog";
import {UsuarioService} from 'src/app/shared/services/usuario/usuario.service';
import { SugerenciaService } from 'src/app/shared/services/sugerencias/sugerencia.service';


@Component({
  selector: 'app-ver-sugerencias',
  templateUrl: './ver-sugerencias.component.html',
  styleUrls: ['./ver-sugerencias.component.css']
})

export class VerSugerenciasComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['nombrePersona', 'apellidoPersona', 'titulo', 'edicion', 'editorial', 'fechaPublicacion','nombreAutor','apellidoAutor','modificar']



  constructor(public dialog: MatDialog, private service: SugerenciaService) {
  }


  
  ngOnInit(): void {
    
    this.service.getSugerencias().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<Sugerencia>(data as Sugerencia[]);
      console.log(data);
    },(errorData)=> (alert("Usuario No Autorizado"
    //,this.router.navigate(['/'])
    
    )))

  }
  data = [

  ];



 deleteSuggestions(id: number) {
    //const index = this.data.findIndex(obj => obj.id_sugerencia === id);
    //if (index > -1) {
    //  this.data.splice(index, 1);
    }
    //this.updateDataSource();
  


  showBack() {
   // console.log(this.service.getSugerencias)
  }

 
  updateDataSource() {
    //this.dataSource.data = this.data;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.service.getSugerenciasxtitulo(filterValue).subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<Sugerencia>(data as Sugerencia[]);
    }, (errorData)=> (alert("Usuario No Autorizado" )))
    //,this.router.navigate(['/'])
    //this.dataSource.filter = filterValue.trim().toLowerCase();
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
