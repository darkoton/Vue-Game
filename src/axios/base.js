import axios from "axios";

const axios1 = axios.create({
  baseURL: process.env.VUE_BACKEND_URL,
  headers: {
    Authorization: `Bearer {token}`
  }
})
const axios2 = axios.create({
  baseURL: process.env.VUE_BACKEND_URL2,
  headers: {
    Authorization: `Bearer {token}`
  }
})

export default { axios1, axios2 }