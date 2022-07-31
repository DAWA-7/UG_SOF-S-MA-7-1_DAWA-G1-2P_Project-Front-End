import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiaInicioComponent } from './pages/noticia-inicio/noticia-inicio.component';
import { NoticiaArticuloComponent } from './pages/noticia-articulo/noticia-articulo.component';
import { NoticiaCard1Component } from './components/noticia-card1/noticia-card1.component';
import { NoticiaCard2Component } from './components/noticia-card2/noticia-card2.component';
import { NoticiaArticulo1Component } from './components/noticia-articulo1/noticia-articulo1.component';

@NgModule({
  declarations: [
    NoticiaInicioComponent,
    NoticiaArticuloComponent,
    NoticiaCard1Component,
    NoticiaCard2Component,
    NoticiaArticulo1Component,
  ],
  imports: [CommonModule, NoticiasRoutingModule, SharedModule],
})
export class NoticiasModule {} // import at app.modules.ts (old method)
// import at app-router.module.ts with lazy loading
