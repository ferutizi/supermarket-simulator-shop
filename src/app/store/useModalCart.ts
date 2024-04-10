import { create } from "zustand"

type ModalCartState = {
  showModalCart: boolean,
}

type ModalCartActions = {
  openModal: () => void,
  closeModal: () => void,
}

export const useModalCart = create<ModalCartState & ModalCartActions>((set) => ({
  showModalCart: false,
  openModal: () => set(() => ({ showModalCart: true })),
  closeModal: () => set(() => ({ showModalCart: false })),
}))