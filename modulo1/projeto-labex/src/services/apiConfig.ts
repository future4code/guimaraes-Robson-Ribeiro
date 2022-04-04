interface Config {
    apiName: string,
    baseURL: string,
    headers: object    
}

const apiConfig: Config = {
    apiName: 'labeX',
    baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/',
    headers: {
        "Content-type": "applucation/json"
    }
}

export  default apiConfig;