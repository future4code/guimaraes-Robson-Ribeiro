import { useEffect, useState } from "react";

import api from "../services/api";

const useRequestData = ({ url, initialize }) => {
    const [data, setData] = useState(initialize)
    const [error, setError]= useState('');

   useEffect( () => {
        fetch(url)
        .then((respponse) => { setData( respponse.data )} )
        .catch((error) => {setError([error]) });
   }, []);
}

export default useRequestData;