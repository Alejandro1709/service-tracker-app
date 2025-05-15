import { AxiosError } from 'axios'
import api from '../config/axios'
import type { CreateServiceType } from '../types/service'

export const getServices = async () => {
  try {
    const { data } = await api.get('/api/v1/services')

    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error
    }
  }
}

export const createService = async (formData: CreateServiceType) => {
  try {
    const { data } = await api.post('/api/v1/services', formData)

    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error
    }
  }
}
