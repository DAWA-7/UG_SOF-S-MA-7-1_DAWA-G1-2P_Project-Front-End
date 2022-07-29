import { MostrarCatalogoComponent } from './modules/catalogo/mostrar-catalogo/mostrar-catalogo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { MaterialModule } from './shared/material/material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgregarUserComponent } from './admin/cpanel1/cpanel-user/agregar-user/agregar-user.component';
import { ListarUserComponent } from './admin/cpanel1/cpanel-user/listar-user/listar-user.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RegisterComponent } from './modules/auth/register/register.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { DetalleLibroComponent } from './modules/catalogo/detalle-libro/detalle-libro.component';
import { CPanelComponent } from './admin/cpanel1/cpanel.component';
import { CPanelHomeComponent } from './admin/cpanel1/cpanel-home/cpanel-home.component';
import { ModuleComponent } from './modules/module.component';
import { MatMenuModule } from '@angular/material/menu';
import { LibroComponent } from './shared/components/libro/libro.component';
import { MatSortModule } from '@angular/material/sort';
import { NoticiasModule } from './modules/noticias/noticias.module';
import { ButtonPrimaryComponent } from './shared/components/buttons/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './shared/components/buttons/button-secondary/button-secondary.component';
import { AgregarLibroComponent } from './admin/cpanel1/cpanel-libro/agregar-libro/agregar-libro.component';
import { ListarLibroComponent } from './admin/cpanel1/cpanel-libro/listar-libro/listar-libro.component';
import { CarritoCompraComponent } from './modules/carrito-compra/carrito-compra.component';
import { CarritoSectionComponent } from './modules/carrito-compra/carrito-section/carrito-section.component';
import { VerSugerenciasComponent } from './admin/cpanel1/cpanel-sugerencias/ver-sugerencias/ver-sugerencias.component';
import { SugerenciaComponent } from './modules/sugerencias/sugerencia/sugerencia.component';
import { AgregarSugerenciaComponent } from './modules/sugerencias/agregar-sugerencia/agregar-sugerencia.component';
import { DatePipe } from '@angular/common';
import { NoticiasListarComponent } from './admin/cpanel1/cpanel-noticias/noticias-listar/noticias-listar.component';
import {ViewSugerenciasComponent} from "./modules/sugerencias/ver-sugerencias/view-sugerencias.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ListarUserComponent,
    AgregarUserComponent,
    RegisterComponent,
    MostrarCatalogoComponent,
    DetalleLibroComponent,
    CPanelComponent,
    CPanelHomeComponent,
    ListarLibroComponent,
    AgregarLibroComponent,
    ModuleComponent,
    LibroComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    VerSugerenciasComponent,
    SugerenciaComponent,
    AgregarSugerenciaComponent,
    CarritoCompraComponent,
    CarritoSectionComponent,
    NoticiasListarComponent,
    ViewSugerenciasComponent
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
    NoticiasModule,
    MatDialogModule,
  ],
  entryComponents: [LoginComponent, HeaderComponent],
  providers: [DatePipe,{ provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent],
})
export class AppModule {}
