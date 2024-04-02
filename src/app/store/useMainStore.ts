import { create } from 'zustand'
import { Product } from '../types'

interface MainStoreState {
  products: Product[]
}

export const useMainStore = create<MainStoreState>((set) => ({
  products: [
    {
      name: 'Pan',
      price: 5,
      quantityPerBox: 12,
      img: 'img',
      supplier: 'juan',
      placeAt: 'estanteria',
      /* estanteria, heladera, congelador */
      amount: 1,
      subTotal: 5
    }
  ]
}))