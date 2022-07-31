import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SugerenciasRoutingModule } from './sugerencias-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SugerenciaComponent } from './pages/sugerencia/sugerencia.component';
import { AgregarSugerenciaComponent } from './components/agregar-sugerencia/agregar-sugerencia.component';
import { ViewSugerenciasComponent } from './components/ver-sugerencias/view-sugerencias.component';

@NgModule({
  declarations: [
    SugerenciaComponent,
    AgregarSugerenciaComponent,
    ViewSugerenciasComponent,
  ],
  imports: [CommonModule, SugerenciasRoutingModule, SharedModule],
})
export class SugerenciasModule {}
