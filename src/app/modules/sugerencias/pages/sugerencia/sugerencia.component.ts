import {Component, OnInit} from '@angular/core';


export interface suggest {
  titulo: string,
  descripcion: string
}

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.css']
})
export class SugerenciaComponent implements OnInit {

  constructor() {
  }


  ngOnInit(): void {
  }

  recomendaciones: suggest[] = [{
    titulo:
      "Consulta", descripcion: "Consulte primero el catálogo para asegurarse de que aún no tenemos el artículo."
  }, {
    titulo: "Proceso",
    descripcion: "Para procesar su solicitud rápidamente, es útil si puede proporcionar la mayor cantidad de información posible."
  }, {
    titulo: "Uso",
    descripcion: " Utilice un formulario separado para cada artículo sugerido. Todas las sugerencias serán consideradas y nos comunicaremos con usted para informarle cuando el artículo esté disponible."
  }];


}
