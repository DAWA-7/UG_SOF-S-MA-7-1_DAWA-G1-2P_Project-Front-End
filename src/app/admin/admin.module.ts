import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CPanelHomeComponent } from './components/cpanel-home/cpanel-home.component';
import { CPanelComponent } from './pages/cpanel1/cpanel.component';
import { AgregarLibroComponent } from './components/cpanel-libro/agregar-libro/agregar-libro.component';
import { ListarLibroComponent } from './components/cpanel-libro/listar-libro/listar-libro.component';
import { NoticiasListarComponent } from './components/cpanel-noticias/noticias-listar/noticias-listar.component';
import { VerSugerenciasComponent } from './components/cpanel-sugerencias/ver-sugerencias/ver-sugerencias.component';
import { AgregarUserComponent } from './components/cpanel-user/agregar-user/agregar-user.component';
import { ListarUserComponent } from './components/cpanel-user/listar-user/listar-user.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    CPanelComponent,
    CPanelHomeComponent,
    AgregarLibroComponent,
    ListarLibroComponent,
    NoticiasListarComponent,
    VerSugerenciasComponent,
    AgregarUserComponent,
    ListarUserComponent,
    TableComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
  providers: [
    DatePipe,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [CPanelComponent],
})
export class AdminModule {}
