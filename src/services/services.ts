import { AxiosError } from 'axios'
import api from '../config/axios'
import type { CreateServiceType, EditServiceType } from '../types/service'

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

export const getService = async (slug: string) => {
  try {
    const { data } = await api.get(`/api/v1/services/${slug}`)

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

export const updateService = async (
  slug: string,
  formData: EditServiceType
) => {
  try {
    const { data } = await api.put(`/api/v1/services/${slug}`, formData)

    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error
    }
  }
}

export const deleteService = async (slug: string) => {
  try {
    const { data } = await api.delete(`/api/v1/services/${slug}`)

    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error
    }
  }
}
