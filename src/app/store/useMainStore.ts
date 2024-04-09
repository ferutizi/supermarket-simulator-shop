import { create } from 'zustand'
import { Product } from '../types'

interface MainStoreState {
  products: Product[],
  incrementAmount: (product: Product) => void,
  decrementAmount: (product: Product) => void,
  getProducts: () => Promise<void>
}

export const useMainStore = create<MainStoreState>((set) => ({
  products: [],

  incrementAmount: (product) => {
    set((state) => {
      const productIndex = state.products.findIndex(p => p.name === product.name)
      const updatedProducts = [...state.products]
      const productToIncrement = updatedProducts[productIndex]
      productToIncrement.amount++
      productToIncrement.subTotal = parseFloat((productToIncrement.subTotal + product.totalPrice).toFixed(2))
      return { products: updatedProducts }
    })
  },

  decrementAmount: (product) => {
    if (product.amount > 1) {
      set((state) => {
        const productIndex = state.products.findIndex(p => p.name === product.name)
        const updatedProducts = [...state.products]
        const productToDecrement = updatedProducts[productIndex]
        productToDecrement.amount--
        productToDecrement.subTotal = parseFloat((productToDecrement.subTotal - product.totalPrice).toFixed(2))
        return { products: updatedProducts }
      })
    }
  },

  getProducts: async () => {
    const csv = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRTJtFedbNr45iLpCopyhZ2b6B8D82dK2zOJy4D7C1OxUubO66aQRU5jH2ZwnZumGg50IWHfcEMEZeh/pub?gid=0&single=true&output=csv')
      .then((res) => res.text())
    const productsToLoad = csv
      .split("\n")
      .slice(1)
      .map((row) => {
        const [
          id,
          name,
          supplier,
          placeAt,
          totalPrice,
          unityPrice,
          quantityPerBox,
          img] = row.split(",")

        return {
          id: Number(id),
          name,
          supplier,
          placeAt,
          totalPrice: Number(totalPrice),
          unityPrice: Number(unityPrice),
          quantityPerBox: Number(quantityPerBox),
          img,
          amount: 1,
          subTotal: Number(totalPrice)
        }
      })
    console.log(productsToLoad)
    set(() => {
      return { products: productsToLoad }
    })
  }
}))