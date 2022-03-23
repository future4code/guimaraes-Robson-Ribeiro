import apiAstromatch from "./apiAstromatch";

const user = 'robson-ribeiro-guimaraes'

const api = {
    astromatch: {
        getProfileToChoose: () => {
            const url = `${user}/person`
            return apiAstromatch.get(url);
        },

        getMatches: () => {},
        
        ChoosePerson: (id, choice) => {
            const url = `${user}/choose-person`;
            const body = {
                id: id,
                choice: choice
            };
            return apiAstromatch.post(url,body);
        },

        Clear: () => {
            const url = `${user}/clear`;
            return apiAstromatch.put(url);
        }
    }
}

export default api;
