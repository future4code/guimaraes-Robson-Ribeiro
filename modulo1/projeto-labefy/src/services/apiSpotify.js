import axios from 'axios';
import queryString from 'query-string';

import apiConfig from './apiConfig';

const apiSpotify = axios.create({
    baseURL: apiConfig.spotify.baseURL,
    headers: apiConfig.spotify.headers,
    paramsSerializer: params => queryString.stringify({...params })
});

apiSpotify.interceptors.request.use(async (config) => config);

apiSpotify.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default apiSpotify;