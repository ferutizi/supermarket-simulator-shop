export type Product = {
  name: string,
  price: number,
  quantityPerBox: number,
  img: string,
  supplier: string,
  placeAt: string,
  /* estanteria, heladera, congelador */
  amount: number,
  subTotal: number,
}