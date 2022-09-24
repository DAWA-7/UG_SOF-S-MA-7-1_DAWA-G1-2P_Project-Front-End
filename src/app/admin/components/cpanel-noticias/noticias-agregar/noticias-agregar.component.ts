import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NoticiasService } from 'src/app/shared/services/noticias/noticias.service';

@Component({
  selector: 'app-noticias-agregar',
  templateUrl: './noticias-agregar.component.html',
  styleUrls: ['./noticias-agregar.component.css'],
})
export class NoticiasAgregarComponent implements OnInit {
  //#region Variables
  formTitle = '';
  actionBtn: string = 'Guardar';
  titulo: string = 'form';
  noticiaForm!: FormGroup;
  archivos: any = [];
  //#endregion

  constructor(
    private formBuilder: FormBuilder,
    private serviceNoticias: NoticiasService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public editarDatos: any,
    private dialogRef: MatDialogRef<NoticiasAgregarComponent>
  ) {}

  ngOnInit(): void {
    this.formTitle = this.editarDatos.formTitle;
    console.log(this.formTitle);
    this.noticiaForm = this.formBuilder.group({
      id_libro: ['', Validators.required],
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      editorial: ['', Validators.required],
      num_paginas: ['', Validators.required],
      isbn: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      fecha_publicacion: ['', Validators.required],
      cantidad: ['', Validators.required],
      id_categoria: ['', Validators.required],
    });
  }

  //#region Functions
  agregarNoticia() {}
  closeDialog() {}
  //#endregion
}
