export const interceptors = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken')

      config.headers = {
        authorization: token ? `Bearer ${token}` : null,
      }
      return config
    },
    (error) => Promise.reject(error.response)
  )
  return instance
}