import axios from 'axios';

const API_ENDPOINT = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';

const headers = {
    headers: {
      Authorization: "robson-ribeiro-guimaraes"
    }
  };

export const  getAllUser = async () => {
    const response = await axios.get(API_ENDPOINT, headers);
  return response;
}

export const createUser = ( nameUser, emailUser ) => {
  const body = {
    name: nameUser,
    email: emailUser
  }
  
  const res = axios.post(API_ENDPOINT, body, headers)
  .then( ( data ) => {return  data }  )
  .catch( (error) => {return  error.response } );

  return res;
}

export const deleteUser = (id) => {
  const res = axios.delete(`${API_ENDPOINT}/${id}`, headers)
  .then((data) => { return data })
  .catch((error) => { return error.response});

  return res;
}

