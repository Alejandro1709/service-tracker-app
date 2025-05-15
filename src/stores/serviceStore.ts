import { create } from 'zustand'
import type { IService } from '../types/service'

type ServiceStoreType = {
  services: IService[]
  selected?: IService
  setServices: (services: IService[]) => void
  setSelected: (service: IService) => void
}

export const useServiceStore = create<ServiceStoreType>((set) => ({
  services: [],
  setServices: (services: IService[]) => set(() => ({ services })),
  setSelected: (selected: IService) => set(() => ({ selected })),
}))
