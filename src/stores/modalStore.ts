import { create } from 'zustand'

type ModalStoreType = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const useModalStore = create<ModalStoreType>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set(() => ({ isOpen })),
}))
