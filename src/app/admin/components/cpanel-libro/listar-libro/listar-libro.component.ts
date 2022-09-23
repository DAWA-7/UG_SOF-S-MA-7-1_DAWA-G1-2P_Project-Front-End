import { CatalogoService } from 'src/app/shared/services/catalogo/catalogo.service';
import { Component } from '@angular/core';
import { Book } from 'src/app/shared/interfaces/book';
import { AgregarLibroComponent } from '../agregar-libro/agregar-libro.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-libro',
  templateUrl: './listar-libro.component.html',
  styleUrls: ['./listar-libro.component.css'],
})
export class ListarLibroComponent {
  listLibros: Book[] = [];
  displayedColumns: string[] = [
    'id_libro',
    'titulo',
    'editorial',
    'autor',
    'precio',
    'opciones',
  ];
  titulo: string = '';
  dataSource = new MatTableDataSource<any>();

  constructor(
    private catalogService: CatalogoService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.titulo = 'Agregar Libro';
  }

  openDialog(titulo: string) {
    this.dialog.open(AgregarLibroComponent, { data: titulo });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  ngOnInit(): void {
    this.catalogService.getLibros().subscribe(
      (data: any) => {
        this.dataSource = new MatTableDataSource<Book>(data as Book[]);

      },
      (errorData) => (alert('No autorizado'), this.router.navigate(['/']))
    );
  }

  editLibro(element: any) {
    this.dialog.open(AgregarLibroComponent, {
      data: element,
    });
  }

  //para filtrar por nombre
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  verDetalle(element: any) {
    this.dialog.open(AgregarLibroComponent, {
      data: element,
    });
  }
}
