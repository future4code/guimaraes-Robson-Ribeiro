import axios from "axios";
import apiConfig from "./apiConfig";

const api = axios.create({
    apiName: apiConfig.apiName,
    baseURL: apiConfig.baseURL,
    headers: apiConfig.headers
})

export default api;