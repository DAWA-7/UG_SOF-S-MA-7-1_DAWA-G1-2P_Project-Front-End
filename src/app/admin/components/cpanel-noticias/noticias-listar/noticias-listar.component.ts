import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { iNoticias } from 'src/app/shared/interfaces/noticias';
import { NoticiasService } from 'src/app/shared/services/noticias/noticias.service';
import { mockDataNoticias } from 'src/assets/ts/MOCK_DATA_Noticias';
import { NoticiasAgregarComponent } from '../noticias-agregar/noticias-agregar.component';

@Component({
  selector: 'app-noticias-listar',
  templateUrl: './noticias-listar.component.html',
  styleUrls: ['./noticias-listar.component.css'],
})
export class NoticiasListarComponent implements OnInit {
  //#region Variables
  dataSource = new MatTableDataSource<any>();
  listNewsAPI: any;
  listNews: iNoticias[] = [];
  displayedColumns: string[] = ['id', 'title', 'author', 'date', 'opciones'];
  displayedColumns2: { nameInterface: string; nameToShow: string }[] = [
    { nameInterface: 'id', nameToShow: 'ID' },
    { nameInterface: 'title', nameToShow: 'Título' },
    { nameInterface: 'author', nameToShow: 'Autor' },
    { nameInterface: 'date', nameToShow: 'Fecha' },
  ];
  //#endregion

  constructor(
    private dialog: MatDialog,
    private serviceNoticias: NoticiasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.serviceNoticias.APIGetNoticia().subscribe((data) => {
      this.listNewsAPI = data;
      this.listNews = this.listNewsAPI;
      console.log(this.listNewsAPI);
      console.log(this.listNews);
      this.dataSource = new MatTableDataSource(this.listNews);
    });
    //this.listNews = mockDataNoticias;
    //this.dataSource = new MatTableDataSource(this.listNews);
  }

  //#region Functions
  openDialog(title: string) {
    this.dialog.open(NoticiasAgregarComponent, { data: { formTitle: title } });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  applyFilter(event: Event) {
    // filer by name
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  detalleNoticia(element: any, title: string) {
    this.dialog.open(NoticiasAgregarComponent, {
      data: { formTitle: title, formElement: element },
    });
  }

  editarNoticia(element: any, title: string) {
    this.dialog.open(NoticiasAgregarComponent, {
      data: { formTitle: title, formElement: element },
    });
  }

  eliminarNoticia(element: any) {
    var confirm = window.confirm(
      'Seguro desea borrar la noticia: ' + element.id
    );

    if (confirm) {
      this.serviceNoticias.APIDeleteNoticia(element.id).subscribe();

      this.router.navigate(['/cpanel/noticias']);
      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
    }
  }

  //#endregion
}
