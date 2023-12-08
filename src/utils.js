import axios from 'axios'
const fetchUnsplash = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
})
fetchUnsplash.interceptors.request.use(
  (config) => {
    config.params = {
      client_id: `${import.meta.env.VITE_UNSPLASH_API}`,
      per_page: 9,
      ...config.params,
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default fetchUnsplash
