import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Sugerencia } from '../../../../shared/interfaces/sugerencia';

@Component({
  selector: 'app-agregar-sugerencia',
  templateUrl: './agregar-sugerencia.component.html',
  styleUrls: ['./agregar-sugerencia.component.css'],
})
export class AgregarSugerenciaComponent implements OnInit {
  ingresarSugerencia!: FormGroup;
  public isRegistered: boolean = false;
  public isEdit: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public editarDatos: any,
    public dialogRef: MatDialogRef<AgregarSugerenciaComponent>
  ) {}

  ngOnInit(): void {
    this.ingresarSugerencia = new FormGroup({
      titulo: new FormControl('', Validators.required),
      edicion: new FormControl('', Validators.required),
      editorial: new FormControl('', Validators.required),
      fechaPublicacion: new FormControl('', Validators.required),
      comentarios: new FormControl('', Validators.required),
      nombreAutor: new FormControl('', Validators.required),
      apellidoAutor: new FormControl('', Validators.required),
    });
  }



  
  onSubmit() {

    /*
    if (this.isEdit) {
      const sugerencia: Sugerencia = {
        //id_sugerencia: this.ingresarSugerencia.value.id,
        //nombreLibro: this.ingresarSugerencia.value.titulo,
        //isbn: this.ingresarSugerencia.value.isbn,
        //autor: this.ingresarSugerencia.value.autor,
        //fecha: this.ingresarSugerencia.value.fecha,
        //ci_solicitante: this.ingresarSugerencia.value.ci_solicitante,
      };
      console.log('Sugrencia: ' + sugerencia);
      this.dialogRef.close({ data: sugerencia });
      return;
    }
    this.isRegistered = true;
    setTimeout(() => {
      this.isRegistered = false;
    }, 3000);
    console.log(this.ingresarSugerencia.value);
  }

  ngOnInit(): void {
    this.ingresarSugerencia = new FormGroup({
      autor: new FormControl('', Validators.required),
      titulo: new FormControl('', Validators.required),
      ci_solicitante: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      isbn: new FormControl('', Validators.required),
      razones: new FormControl('', Validators.required),
    });

    if (this.editarDatos) {
      this.isEdit = true;
      this.ingresarSugerencia.controls['titulo'].setValue(
        this.editarDatos.nombreLibro
      ),
        this.ingresarSugerencia.controls['isbn'].setValue(
          this.editarDatos.isbn
        ),
        this.ingresarSugerencia.controls['autor'].setValue(
          this.editarDatos.autor
        ),
        this.ingresarSugerencia.controls['fecha'].setValue(
          new Date(this.editarDatos.fecha)
        ),
        this.ingresarSugerencia.controls['ci_solicitante'].setValue(
          this.editarDatos.ci_solicitante
        );
      return;
    }
    this.isEdit = false;*/
  }
}
