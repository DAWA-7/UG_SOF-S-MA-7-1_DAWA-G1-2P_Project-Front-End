import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LibroComponent } from './components/libro/libro.component';

@NgModule({
  declarations: [LibroComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, LibroComponent],
})
export class SharedModule {}
