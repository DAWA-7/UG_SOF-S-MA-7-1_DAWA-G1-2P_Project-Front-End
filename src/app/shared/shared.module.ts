import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LibroComponent } from './components/libro/libro.component';
import { ButtonPrimaryComponent } from './components/buttons/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './components/buttons/button-secondary/button-secondary.component';

@NgModule({
  declarations: [
    LibroComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    MaterialModule,
    LibroComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
  ],
})
export class SharedModule {}
