import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SugerenciaComponent } from './pages/sugerencia/sugerencia.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'sugerencia', component: SugerenciaComponent },
      { path: '', component: SugerenciaComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SugerenciasRoutingModule {}
