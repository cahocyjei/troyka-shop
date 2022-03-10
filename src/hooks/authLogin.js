import { useEffect, useState } from 'react';
import axios from 'axios';

const AuthLogin = (API,post)=> {
    const [token,setToken]= useState([]);
       useEffect(async()=>{
        const response = await axios.post(API,post);
        setToken(response.data);
    },[])
    return token;
}
export { AuthLogin };