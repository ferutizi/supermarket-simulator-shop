import { create } from 'zustand'
import { Product } from '../types'

interface CartState {
  products: Product[],
  totalValue: number,
  totalItems: number,
  addProduct: (productToAdd: Product) => void,
  removeProduct: (productToRemove: Product) => void,
  incrementAmount: (product: Product) => void,
  decrementAmount: (product: Product) => void,
  clearCart: () => void,
}

export const useCart = create<CartState>((set) => ({
  products: [],
  totalValue: 0,
  totalItems: 0,

  addProduct: (productToAdd) => {
    set((state) => {
      const existingProductIndex = state.products.findIndex(p => p.name === productToAdd.name)
      const newTotalvalue = parseFloat((state.totalValue + productToAdd.subTotal).toFixed(2))
      const newTotalItems = state.totalItems + productToAdd.amount

      if (existingProductIndex !== -1) {
        const updatedProducts: Product[] = structuredClone(state.products)
        const existingProduct = updatedProducts[existingProductIndex]
        existingProduct.amount += productToAdd.amount
        existingProduct.subTotal += productToAdd.subTotal
        return { products: updatedProducts, totalValue: newTotalvalue, totalItems: newTotalItems }
      } else {
        return { products: [...state.products, productToAdd], totalValue: newTotalvalue, totalItems: newTotalItems }
      }
    })
  },

  removeProduct: (productToRemove) => {
    set((state) => {
      const updatedProducts = state.products.filter(p => p.name !== productToRemove.name)
      const newTotal = parseFloat((state.totalValue - productToRemove.subTotal).toFixed(2))
      state.totalItems -= productToRemove.amount
      return { products: updatedProducts, totalValue: newTotal }
    })
  },

  incrementAmount: (product) => {
    set((state) => {
      const productIndex = state.products.findIndex(p => p.name === product.name)
      const updatedProducts: Product[] = structuredClone(state.products)
      const productToIncrement = updatedProducts[productIndex]
      productToIncrement.amount++
      productToIncrement.subTotal = parseFloat((productToIncrement.subTotal + product.totalPrice).toFixed(2))
      state.totalItems++
      state.totalValue += product.totalPrice
      return { products: updatedProducts }
    })
  },

  decrementAmount: (product) => {
    if (product.amount > 1) {
      set((state) => {
        const productIndex = state.products.findIndex(p => p.name === product.name)
        const updatedProducts: Product[] = structuredClone(state.products)
        const productToDecrement = updatedProducts[productIndex]
        productToDecrement.amount--
        productToDecrement.subTotal = parseFloat((productToDecrement.subTotal - product.totalPrice).toFixed(2))
        state.totalItems--
        state.totalValue -= product.totalPrice
        return { products: updatedProducts }
      })
    }
  },

  clearCart: () => set(() => ({ products: [], totalValue: 0, totalItems: 0 })),

}))