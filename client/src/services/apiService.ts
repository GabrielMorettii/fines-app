import axios from 'axios'

export const apiService = axios.create({
  baseURL: import.meta.env.VITE_APP_API_SERVICE,
})

apiService.interceptors.response.use(
  function (response) {
    return Promise.resolve(response.data)
  },
  function ({ response }) {
    const { data } = response

    return Promise.reject(data)
  },
)
