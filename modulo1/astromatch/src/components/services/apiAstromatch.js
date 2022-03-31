import axios from 'axios';
import queryString from 'query-string';

import apiConfig from './apiConfig';

const apiAstromatch = axios.create({
    baseURL: apiConfig.astromatch.baseURL,
    headers: apiConfig.astromatch.headers,
    paramsSerializer: params => queryString.stringify({...params })
});

apiAstromatch.interceptors.request.use(async (config) => config);

apiAstromatch.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default apiAstromatch;