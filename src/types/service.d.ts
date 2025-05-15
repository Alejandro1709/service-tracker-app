export interface IService {
  _id: string
  name: string
  slug: string
  description?: string
  entries: []
  createdAt: Date
  updatedAt: Date
}

export type CreateServiceType = Pick<IService, 'name' | 'description'>
