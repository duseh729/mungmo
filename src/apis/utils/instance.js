import axios from 'axios'
// import { getItem } from '@utils/storage'

import config from '../../../api'

const baseAPI = (url, options) => {
  return axios.create({ baseURL: url, ...options })
}

// const authAPI = (url, options) => {
//   const token = getItem('jwt_token')
//   return axios.create({
//     baseURL: url,
//     headers: {
//       Authorization: `bearer ${token}`,
//     },
//     ...options,
//   })
// }

export const baseInstance = baseAPI(process.env.REACT_APP_SERVER_URL);
export const authInstance = authAPI(process.env.REACT_APP_SERVER_URL);