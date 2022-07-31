import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { MaterialModule } from './shared/material/material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgregarUserComponent } from './admin/cpanel1/cpanel-user/agregar-user/agregar-user.component';
import { ListarUserComponent } from './admin/cpanel1/cpanel-user/listar-user/listar-user.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CPanelComponent } from './admin/cpanel1/cpanel.component';
import { CPanelHomeComponent } from './admin/cpanel1/cpanel-home/cpanel-home.component';
import { ModuleComponent } from './modules/module.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { ButtonPrimaryComponent } from './shared/components/buttons/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './shared/components/buttons/button-secondary/button-secondary.component';
import { AgregarLibroComponent } from './admin/cpanel1/cpanel-libro/agregar-libro/agregar-libro.component';
import { ListarLibroComponent } from './admin/cpanel1/cpanel-libro/listar-libro/listar-libro.component';
import { VerSugerenciasComponent } from './admin/cpanel1/cpanel-sugerencias/ver-sugerencias/ver-sugerencias.component';
import { DatePipe } from '@angular/common';
import { NoticiasListarComponent } from './admin/cpanel1/cpanel-noticias/noticias-listar/noticias-listar.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    ListarUserComponent,
    AgregarUserComponent,

    CPanelComponent,
    CPanelHomeComponent,
    ListarLibroComponent,
    AgregarLibroComponent,
    ModuleComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    VerSugerenciasComponent,
    NoticiasListarComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRouterModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatMenuModule,
    MatSortModule,
    MatDialogModule,
  ],
  entryComponents: [HeaderComponent],
  providers: [
    DatePipe,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
