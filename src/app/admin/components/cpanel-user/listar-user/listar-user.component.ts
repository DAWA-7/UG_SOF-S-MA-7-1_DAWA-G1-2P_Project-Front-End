import {UsuarioService} from '../../../../shared/services/usuario/usuario.service';
import {User} from '../../../../shared/interfaces/user';
import {AgregarUserComponent} from '../agregar-user/agregar-user.component';
import {Component, OnInit} from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listar-user',
  templateUrl: './listar-user.component.html',
  styleUrls: ['./listar-user.component.css']
})
export class ListarUserComponent implements OnInit {

  listUsuario: User[] = []
  displayedColumns: string[] = ['nombres', 'cedula', 'usuario', 'correo', 'modificar'];
  //para llamar al matdialog
  dataSource = new MatTableDataSource<any>;

  constructor(private usuerService: UsuarioService, public dialog: MatDialog) {
  }

  openDialog() {

    this.dialog.open(AgregarUserComponent);
  }

  closeDialog() {
    this.dialog.closeAll()
  }

  ngOnInit(): void {
    this.listUsuario = this.usuerService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuario);

  }

  editUsuario(element: any) {
    this.dialog.open(AgregarUserComponent, {
      data: element
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteSuggestions(id: number) {
    const index = this.listUsuario.findIndex(obj => obj.cedula === id);
    if (index > -1) {
      this.listUsuario.splice(index, 1);
    }
    this.updateDataSource();
  }

  updateDataSource() {
    this.dataSource.data = this.listUsuario;
  }

}
