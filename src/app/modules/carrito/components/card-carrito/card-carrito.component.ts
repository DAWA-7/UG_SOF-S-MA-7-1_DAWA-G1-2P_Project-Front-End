import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/shared/interfaces/carrito';

import { CarritoService } from 'src/app/shared/services/carrito/carrito.service';
import { CatalogoService } from 'src/app/shared/services/catalogo/catalogo.service';

@Component({
  selector: 'app-card-carrito',
  templateUrl: './card-carrito.component.html',
  styleUrls: ['./card-carrito.component.css']
})

export class CardCarritoComponent implements OnInit {
  InputLibros: any;
  newsItem: any;
  num = 0
  cantidadLibros = 1
  idsList: any = []

  cartData = this.cartService.cartData
  constructor(private cartService: CarritoService, private _service: CatalogoService) { }

  items = this.cartService.getItems()
  unidad = this.cartService.getCantidad()

  //obtengo el valor de la longitud del arreglo↓
  countBook = this.idsList.length

  //obtengo los valores que se encuentran dentro del arreglo
  listPrecio = this.cartService.listPrecio

  ngOnInit(): void {
     this.idsList = this.cartService.getItems()
     console.log(this.idsList)
    // this.cartService.getItems.subscribe((resp: any)=>{
    //   this.idsList = resp
    //   console.log(this.idsList[0].libro)
    // })
    
  } 
  
  //para el boton que define la cantidad de libros 


  

  //para el boton que define la cantidad de libros
    btnPlus(id: any){

      const libro = this.cartData.find((libro: { id: any; }) => libro.id === id)
      var precioLibro = libro?.precio
      this.listPrecio.push(precioLibro!)
      


    }

    findPrice(precio:any, id: any){
      //metodo para eliminar la tarjeta si presiona el botón menos y esta en cantidad = 1
      this.num = this.priceRep(id)
      const libro = this.cartData.find((libro: { id: any; }) => libro.id === id)
      const idLibro = this.cartData.indexOf(libro!)
      
      // if(this.num == 1){
      //   if(idLibro!=-1){
      //     this.cartData.splice(idLibro, 1)
      //   }
      // }
      // const libro = this.items.find(libro => libro.id_libro === id)
      // const idLibro = this.items.indexOf(libro!)

      if(this.num == 1){
        if(idLibro!=-1){
          this.items.splice(idLibro, 1)
        }
      }
      //↑

      const findPrice = this.listPrecio.find(price => price === precio)
      var price = this.listPrecio.indexOf(findPrice!)
      if(price !=-1){
        //la función indexOf lo que hace es obtener el index es decir los valores de la lista pero ordenandolas 1 a 1 es decir 1 2 3 4 y...
        //la funcipn splice lo que hace es eliminar el index por ejemplo price si es igual a 1 elinminar el elemento en esa posición y así sucesivamente
        this.listPrecio.splice(price, 1)

      }





    }

    priceRep(id: any){
      //obtengo el precio de cada libro
      
      // const libro = this.cartData.find((libro: { id: any; }) => libro.id === id)
      // const idLibro = this.cartData.indexOf(libro!)

      const libro = this.items.find(libro => libro.id_libro === id)
      const idLibro = this.items.indexOf(libro!)
      var precioLibro = libro?.precio

      //↑
      const resultado = this.listPrecio.reduce((prev:any, cur:any) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})



      return resultado[precioLibro!]



    }

  //↑

  delAll(id: any){
    //obtengo el precio de cada libro
    const libro = this.cartData.find((libro: { id: any; }) => libro.id === id)
    var precioLibro = libro?.precio
    //↑
    const resultado = this.listPrecio.reduce((prev:any, cur:any) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
    var numFor = resultado[precioLibro!]

    for(var i = 0; i<numFor; i++){
      var price = this.listPrecio.indexOf(precioLibro!)
      if(price !=-1){
        this.listPrecio.splice(price, 1)
      }
    }

    // this.items.splice(id)
    // console.log(this.listPrecio)

    // this.cartService.deleteCard(id)
    //eliminar card
    // var card = document.getElementById("card")
    // card?.remove()
  }

  delCard(id: any){
    //obtengo el precio de cada libro
    const libro = this.cartData.find((libro: { id: any; }) => libro.id === id)
    const idLibro = this.cartData.indexOf(libro!)
    if(idLibro!=-1){
      this.cartData.splice(idLibro, 1)
    }



     // const libro = this.items.find(libro => libro.id_libro === id)



  }


  //Nueva parte Carrito

  sumPrecio(cantidad: Carrito){
  
    cantidad.cantidad += 1

    return  cantidad
  }

  restPrecio(cantidad: Carrito){

    if(cantidad.cantidad >1){
      cantidad.cantidad -= 1
    }
   

    return  cantidad
  }
  
  


}
