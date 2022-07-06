import axios from "axios";

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/',
})

export default instance;