import { useEffect, useState } from 'react';
import axios from 'axios';

const UseGetUsers = (API)=> {
    const [users,setUsers]= useState([]);
       useEffect(async()=>{
        const response = await axios(API);
        setUsers(response.data);
    },[])
    return users;
}
export default UseGetUsers;