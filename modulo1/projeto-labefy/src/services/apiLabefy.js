import axios from 'axios';
import queryString from 'query-string';

import apiConfig from './apiConfig';

const apiLabefy = axios.create({
    baseURL: apiConfig.labefy.baseURL,
    headers: apiConfig.labefy.headers,
    paramsSerializer: params => queryString.stringify({...params })
});

apiLabefy.interceptors.request.use(async (config) => config);

apiLabefy.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default apiLabefy;