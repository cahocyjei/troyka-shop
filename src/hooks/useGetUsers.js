import { useEffect, useState } from 'react';
import axios from 'axios';

const UseGetUsers = (API,post)=> {
    const [users,setUsers]= useState([]);
       useEffect(async()=>{
        const response = await axios.post(API,post);
        setUsers(response.data);
    },[])
    return users;
}
export default UseGetUsers;