import axios from 'axios'
import config from '~assets/js/config.js'

export const blog = axios.create({
  baseURL: config.apiUrl,
  timeout: 5000,
  headers: { 'Accept': 'application/json' }
})
