import {useEffect,useState} from 'react';
import axios from 'axios';

const authLogin = (API,data) => {
    const [auth,setAuth] = useState({})
    useEffect(async()=>{

            const response = await axios.post(API, data);
            setAuth(response.data);
           
        
    })
    return auth;
}

export default authLogin;