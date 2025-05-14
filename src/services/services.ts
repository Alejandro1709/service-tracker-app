import { AxiosError } from 'axios'
import api from '../config/axios'

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
