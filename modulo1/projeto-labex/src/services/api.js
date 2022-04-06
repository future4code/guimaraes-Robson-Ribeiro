import apiLabeX from "./apiLabex";

const aluno = 'robson-ribeiro-guimaraes';

const api = {
    labeX: {
        populate: () => {},
        getTrips: () => {
            const url = `${aluno}/trips`;
            return apiLabeX.get(url);
        },
        getTripDetail: () => {},
        createTrip: () => {},
        applyTrip: () => {},
        deleteTrip: () => {},
        
        signUp: (email, password) => {
            const url = `${aluno}/signup`
            const body = {
                email: email,
                password: password
            } 
            return apiLabeX.post(url, body);
        },

        login: ( email, password ) => {
            const url = `${aluno}/login`;
            const body  = {
                email: email,
                password: password
            }

            return apiLabeX.post(url, body);
        },
        decideCandidate: () => {}
    }
}

const monutHeaders = (auth) => {
    const headers = {
        headers:{
            Auth: auth
        }
    }

    return headers;
}

export default api