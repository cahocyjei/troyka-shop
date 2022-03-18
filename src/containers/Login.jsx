import React, { useState,useRef, useContext } from 'react';
import Logo from '../asset/logos/logo_yard_sale.svg';
import '../styles/Login.scss';
import AppContex from '../context/AppContext';
//import UserGetUsers from '../hooks/UserGetUsers';
import { Link } from 'react-router-dom';

const API = 'https://api.escuelajs.co/api/v1/users';
const Login = () => {
  const [msge,setMsge] = useState('  ');
  const [useUser,setUser] = useState({});
  const { state,logEmail } = useContext(AppContex);
  const form = useRef(null);
  const users = UserGetUsers(API);

  //Functions
  const userEmail = ()=>{
  //Forms of Dates
    const formData = new FormData(form.current);
    const data = {
    userName:formData.get('email'),
    password:formData.get('password')
  }
 //charge users
  const logIn = users.filter(user=>{
   if (data.userName === user.email) {
     return user;
   }
 });
 setUser(logIn[0]);
  }
  //
  const userPassword = ()=>{
  //Forms of Dates
    const formData = new FormData(form.current);
    const data = {
    userName:formData.get('email'),
    password:formData.get('password')
  }
  if (useUser) {
   if (data.password === useUser.password) {
    logEmail(useUser.email)
   }
  }
  }
  //
  const handleSubmit = (event)=>{
  event.preventDefault();
  if (state.email.length !== 0) {
    return true;
  }else{
    setMsge('Usuario o Contraseña Incorrectos');
    return false;
  }
}
//
const reset = ()=>{
  setMsge('');
}
    return (
    <div className="login">
      <div className="form-container">
        <img src= {Logo} alt = "logo" className= "logo"/>
          <p className="subtitle">Enter email and password</p>
        <form action="/" className="form" ref= {form}>
          <label>email address</label>
          <input type="text" name="email" placeholder="@email" onKeyDown={reset} onChange={userEmail}/>
          <label>Password</label>
          <input type="password" name="password" placeholder= "*********" onKeyDown={reset} onChange={userPassword}/>
          <button type='submit' 
            className="primary-button login-button" 
            onClick={handleSubmit}>
            <Link  to= {state.email.length !== 0?'/':" "}>Log-In</Link>
          </button>
          <p>{msge}</p>
        </form>
      </div>
    </div>
  )
}

export default Login;