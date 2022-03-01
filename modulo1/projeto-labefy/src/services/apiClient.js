import axios from 'axios';
import queryString from 'query-string';

import apiConfig from './apiConfig';

const apiClient = axios.create({
    baseURL: apiConfig.baseURL,
    headers: apiConfig.headers,
    paramsSerializer: params => queryString.stringify({...params })
});

apiClient.interceptors.request.use(async (config) => config);

apiClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default apiClient;