import axios from 'axios'

const API = axios.create({
  baseURL: 'https://tik-tok-mern-back-end.herokuapp.com',
})

export default API
