import React from 'react';
import Logo from '../../public/assets/logos/logo_yard_sale.svg';
import '../styles/Login.scss';

const Login = () => {
    return (
    <div className="login">
      <div className="form-container">
        <img src= {Logo} alt = "logo" className= "logo"/>
          <h1 className="title">CreclassNamee a new password</h1>
          <p className="subtitle">Enter a new passwrd for yue account</p>
        <form action="/" className="form">
          <label className="password">Password</label>
          <input type="password" id="password" placeholder="*********" className="input input-password" />
          <label className="new-password">Password</label>
          <input type="password" id="new-password" placeholder="*********" className="input input-password" />
          <input type="submit" defaultValue="Confirm" className="primary-button login-button" />
        </form>
      </div>
    </div>
  )
}

export default Login;