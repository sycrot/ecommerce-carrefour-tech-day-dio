import axios from "axios";
const URL = 'https://mercado.carrefour.com.br/'

const app = axios.create({
    baseURL: URL
})

export default app