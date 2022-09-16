export interface Book {
  id_libro: number;
  autor: Autor[];
  editorial: string;
  categoria: Categoria[];
  fecha_publicacion: Date;
  num_paginas: number;
  isbn: string;
  descripcion: string;
  titulo: string;
  cantidad: number;
  precio: number;
  imagen: string;
  //imagen: number;
  //estado: number;
  // fecha_registro: Date;
}

export interface Editorial {
  id_editorial: number;
  nombre_editorial: string;
  fecha_registro: Date;
  id_estado: number;
}

export interface Autor {
  id_autor_libro: number;
  nombre_autor: string;
  apellido_autor: string;
  fecha_registro: Date;
  id_estado: number;
}

export interface Autor_Libro {
  id_autor_libro_libro: number;
  id_autor_libro: number;
  id_libro: number;
  fecha_registro: Date;
  id_estado: number;
}

export interface Categoria {
  id_categoria: number;
  nombre_categoria: string;
  /*fecha_registro: Date;
  id_estado: number;*/
}

export interface Categoria_Libro {
  id_categoria_libro: number;
  id_categoria: number;
  id_libro: number;
  fecha_registro: Date;
  id_estado: number;
}
