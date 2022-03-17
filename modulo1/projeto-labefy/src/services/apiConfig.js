const apiConfig = {  
    labefy: {
        baseURL: process.env.REACT_APP_LABEFY_URL,
        headers: {
            Authorization: "robson-ribeiro-guimaraes"
        }
    },

    spotify:{
        baseURL: process.env.REACT_APP_SPOTIFY_URL,
        headers: {
            Authorization: "Bearer ",
            'Content-Type': 'application/json'
        }
    }

}

export default apiConfig;