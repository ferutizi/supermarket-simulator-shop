import { create } from 'zustand'
import { Product } from '../types'

interface MainStoreState {
  products: Product[]
}

export const useMainStore = create<MainStoreState>((set) => ({
  products: [
    {
      name: "Leche",
      price: 1.5,
      quantityPerBox: 10,
      img: "lecheimg",
      supplier: "LaVacaFeliz",
      placeAt: "refrigeración",
      amount: 1,
      subTotal: 1.5
    },
    {
      name: "Huevos",
      price: 3,
      quantityPerBox: 30,
      img: "huevosimg",
      supplier: "GranjaLosPinos",
      placeAt: "estanteria",
      amount: 2,
      subTotal: 6
    },
    {
      name: "Harina",
      price: 2,
      quantityPerBox: 20,
      img: "harinaimg",
      supplier: "MolinosEstrella",
      placeAt: "estanteria",
      amount: 1,
      subTotal: 2
    },
    {
      name: "Azúcar",
      price: 1.8,
      quantityPerBox: 15,
      img: "azucarimg",
      supplier: "DulzuraPura",
      placeAt: "estanteria",
      amount: 1,
      subTotal: 1.8
    },
    {
      name: "Café",
      price: 5.5,
      quantityPerBox: 20,
      img: "cafeimg",
      supplier: "AromaDeMontaña",
      placeAt: "estanteria",
      amount: 1,
      subTotal: 5.5
    },
    {
      name: "Queso",
      price: 4,
      quantityPerBox: 10,
      img: "quesoimg",
      supplier: "SaboresDelCampo",
      placeAt: "refrigeración",
      amount: 1,
      subTotal: 4
    },
    {
      name: "Jamón",
      price: 3.5,
      quantityPerBox: 15,
      img: "jamonimg",
      supplier: "CarnesFrescas",
      placeAt: "refrigeración",
      amount: 2,
      subTotal: 7
    },
    {
      name: "Mantequilla",
      price: 2.5,
      quantityPerBox: 20,
      img: "mantequillaimg",
      supplier: "LaGranjita",
      placeAt: "refrigeración",
      amount: 1,
      subTotal: 2.5
    },
    {
      name: "Pasta",
      price: 1.2,
      quantityPerBox: 24,
      img: "pastaimg",
      supplier: "ItaliaEnTuMesa",
      placeAt: "estanteria",
      amount: 3,
      subTotal: 3.6
    },
    {
      name: "Arroz",
      price: 1,
      quantityPerBox: 30,
      img: "arrozimg",
      supplier: "CamposVerdes",
      placeAt: "estanteria",
      amount: 2,
      subTotal: 2
    }
  ]
}))