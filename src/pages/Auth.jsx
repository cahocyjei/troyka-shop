import React,{useRef,useState,useContext} from 'react';
import { useJwt } from 'react-jwt'
import '../styles/Auth.scss';
import axios from 'axios';
import AppContext from '../context/AppContext'
import { Link } from 'react-router-dom';


const API = 'https://troykamarket.herokuapp.com/troyka/api/auth/authenticate';
const Auth = () => {
	const form = useRef(null);
	const [ useData,setData ]= useState({});
	const { state,loadToken,loadLoading } = useContext(AppContext);
	//Functions
	const userData =()=>{
		const formData = new FormData(form.current);
		const data = {
			username:formData.get("username"),
			password:formData.get("password")	
		}
		setData(data);
	}
		const handledAuth = ()=>{
				try {
				axios.post(API,{username:useData.username,password:useData.password}).then(response =>{
				loadToken(JSON.parse(localStorage.setItem('token',JSON.stringify(useJwt(response.data)))));
			});
			
			} catch (error) {
				console.error(error);
			}
		}
		React.useEffect(()=>{
			if (state.token) {
				loadLoading(false);
			}
		},[state.token])
		console.log(state.loading);
		
	return (
			<div className="AuthLogin">
			<div className="AuthLogin-container">
				<h1 className="title">Please sign in</h1>
				<form action="/" className="form" ref={form}>
					<div>
						<label className='label' htmlFor="username">UserName</label>
						<input type="text" className='username' name="username" placeholder='username' onChange={userData}/>
						<label className='label' htmlFor="password" >Password</label>
						<input type="password" className='password' placeholder='password' name="password" onChange={userData}/>
					</div>
					<button type="button" className="secondary-button login-button">
						<Link onClick={handledAuth} to={'/home'}>Log-in</Link>
					</button>
				</form>
			</div>
		</div>
	);
}

export default Auth;