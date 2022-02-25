import axios from 'axios';

const API_ENDPOINT = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';

let headers = {
    headers: {
      Authorization: "fayra-miranda-aulas"
    }
  };

export function getAllUser() {
    // let config = { ...mountHeader(header) };
    return axios.get(API_ENDPOINT, headers)
    .then(( response ) => response )
}

// function mountHeader(header) {
//     return {
//         headers: {
//         Authorization: header,
//         },
//     };
// }