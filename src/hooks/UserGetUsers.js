import {useEffect,useState} from 'react';
import axios from 'axios'
const [users,setUsers] = useState([]);


const UserGetUsers = () => {

     useEffect(async()=>{
        response = await axios(API);
        setUsers(response.data);
    })
    return users;
}

export {UserGetUsers};

