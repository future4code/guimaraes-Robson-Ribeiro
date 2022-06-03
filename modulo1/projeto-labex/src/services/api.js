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
        createTrip: (data, auth) => {
            const url = `${aluno}/trips`
            return apiLabeX.post(url, data, monutHeaders(auth))
        },
        applyTrip: () => {},
        deleteTrip: (idTrip, auth) => {
            const url = `${aluno}/trips/${idTrip}`
            return apiLabeX.delete(url, monutHeaders(auth));
        },
        
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