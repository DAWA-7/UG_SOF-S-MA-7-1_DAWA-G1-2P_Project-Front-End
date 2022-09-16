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
