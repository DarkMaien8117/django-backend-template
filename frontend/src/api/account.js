import axios from 'axios'
import { endpoint } from '../constants'

const accountEndpoint = `${endpoint}/account`

const account = {
  addAccount: (username, password) => axios.post(`${accountEndpoint}/signup`, { 'Username': username, 'Password': password }),
  findAccount: (username, password) => axios.get(`${accountEndpoint}/login`, { 'Username': username, 'Password': password })
}

export default account