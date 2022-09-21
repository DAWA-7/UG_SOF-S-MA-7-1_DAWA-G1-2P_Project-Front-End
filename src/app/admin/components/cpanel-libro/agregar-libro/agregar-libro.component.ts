import { Book } from '../../../../shared/interfaces/book';
import { Categoria } from 'src/app/shared/interfaces/categoria';
import { CatalogoService } from 'src/app/shared/services/catalogo/catalogo.service';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css'],
})
export class AgregarLibroComponent {
  actionBtn: string = 'Guardar';
  titulo: string = 'Agregar Libro';
  bookForm!: FormGroup;
  archivos: any = [];

  listCategorias: any = this._service.getCategorias();

  constructor(
    private formBuilder: FormBuilder,
    private _serviceBook: CatalogoService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public editarDatos: any,
    private dialogRef: MatDialogRef<AgregarLibroComponent>,
    public _service: CatalogoService
  ) {}

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
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

    if (this.editarDatos) {
      this.actionBtn = 'Actualizar';
      this.titulo = 'Modificar Libro';
      this.bookForm.controls['id_libro'].setValue(this.editarDatos.id_libro),
        this.bookForm.controls['titulo'].setValue(this.editarDatos.titulo),
        this.bookForm.controls['autor'].setValue(this.editarDatos.autor),
        this.bookForm.controls['editorial'].setValue(
          this.editarDatos.editorial
        ),
        this.bookForm.controls['num_paginas'].setValue(
          this.editarDatos.num_paginas
        ),
        this.bookForm.controls['isbn'].setValue(this.editarDatos.isbn),
        this.bookForm.controls['descripcion'].setValue(
          this.editarDatos.descripcion
        ),
        this.bookForm.controls['precio'].setValue(this.editarDatos.precio),
        this.bookForm.controls['fecha_publicacion'].setValue(
          this.editarDatos.fecha_publicacion
        ),
        this.bookForm.controls['cantidad'].setValue(this.editarDatos.cantidad),
        this.bookForm.controls['id_categoria'].setValue(
          this.editarDatos.id_categoria
        ); /*,
        this.bookForm.controls['imagen'].setValue(this.editarDatos.imagen);*/
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  agregarLibro() {
    if (!this.editarDatos && this.actionBtn === 'Guardar') {
      console.log('a');
      const libro: Book = {
        id_libro: this.bookForm.value.id_libro,
        titulo: this.bookForm.value.titulo,
        autor: this.bookForm.value.autor,
        editorial: this.bookForm.value.editorial,
        num_paginas: this.bookForm.value.num_paginas,
        isbn: this.bookForm.value.isbn,
        descripcion: this.bookForm.value.descripcion,
        precio: this.bookForm.value.precio,
        fecha_publicacion: this.bookForm.value.fecha_publicacion,
        cantidad: this.bookForm.value.cantidad,
        id_categoria: this.bookForm.value.id_categoria,
        imagen: 'this.bookForm.value.imagen',
      };
      this.router.navigate(['/cpanel']).then(() =>
        this.router.navigate(['/cpanel/libros'], {
          state: { editarDatos: this._serviceBook.agregarLibro(libro) },
        })
      );
    } else if (this.actionBtn === 'Actualizar') {
      console.log('b');
      const libro: Book = {
        id_libro: this.bookForm.value.id_libro,
        titulo: this.bookForm.value.titulo,
        autor: this.bookForm.value.autor,
        editorial: this.bookForm.value.editorial,
        num_paginas: this.bookForm.value.num_paginas,
        isbn: this.bookForm.value.isbn,
        descripcion: this.bookForm.value.descripcion,
        precio: this.bookForm.value.precio,
        fecha_publicacion: this.bookForm.value.fecha_publicacion,
        cantidad: this.bookForm.value.cantidad,
        id_categoria: this.bookForm.value.id_categoria,
        imagen: 'this.bookForm.value.imagen',
      };
      this.router.navigate(['/cpanel']).then(() =>
        this.router.navigate(['/cpanel/libros'], {
          state: { editarDatos: this._serviceBook.updateLibro(libro) },
        })
      );
    }
    this.dialogRef.close();
  }

  uploadImage(event: any) {
    const fileCapture = event.target.files[0];
    this.archivos.push(fileCapture);
    //console.log(event.target.files);
  }
}
