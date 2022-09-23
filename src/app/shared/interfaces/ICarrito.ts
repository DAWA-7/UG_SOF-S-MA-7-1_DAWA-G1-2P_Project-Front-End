export interface ICarrito{
    id: number,
    IdLibro: number,
    IdUser: number,
    cantidad: number
}

export interface PostCarrito{
  IdLibro: number,
  Username: string,
  Cantidad: number
}
