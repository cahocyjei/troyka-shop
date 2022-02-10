import React, { useRef } from 'react';
import Logo from '../asset/logos/logo_yard_sale.svg';
import '../styles/Login.scss';


const Login = () => {
  const form = useRef(null);
  const handleSubmit = (event)=>{
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      userName:formData.get('email'),
      password:formData.get('password')
    }
    console.log(data);
  }
    return (
    <div className="login">
      <div className="form-container">
        <img src= {Logo} alt = "logo" className= "logo"/>
          <h1 className="title">Create Account</h1>
          <p className="subtitle">Enter user and password</p>
        <form action="/" className="form" ref= {form}>
          <label>email address</label>
          <input type="text" name="email" placeholder="@email"/>
          <label>Password</label>
          <input type="password" name="password" placeholder="*********"/>
          <button type="submit" className="primary-button login-button" onClick={handleSubmit}>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login;