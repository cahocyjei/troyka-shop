import React,{useState,useContext} from 'react';
import { decodeToken,isExpired } from 'react-jwt';
import '../styles/MenuDesktop.scss';
import IconCart from '../asset/icons/icon_shopping_cart.svg';
import Logo from '../asset/logos/logo_yard_sale.svg';
import IconMenu from '../asset/icons/icon_menu.svg';
import Menu from './Menu';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';
import { Link } from 'react-router-dom';
import MenuMobil from './MenuMobil';
import axios from 'axios'
    
const API = 'https://troykamarket.herokuapp.com/troyka/api/products/all'
    const MenuDesktop = () => {
    const { state,toggleOrder,loadProducts,loadError,loadLoading } = useContext(AppContext);
    const [toggleMenu,setTogleMenu]= useState(false);
    const [toggleMyorder,setToggleMyOrder] = useState(false);
    const [mobil,setMobil] = useState(false);
    //Functions 
      const handleMenu = () => {
      if (state.email.length !== 0) {
        setTogleMenu(!toggleMenu);
        if (state.toggle) {
          toggleOrder(!state.toggle);
        }
      }
      }
    const handleMyorder= () => {
      if (state.email.length !== 0 && state.toggle) {
          toggleOrder(toggleMyorder);
        }
      if (state.email.length !== 0 && state.toggle == false) {
        toggleOrder(!toggleMyorder);
        if (toggleMenu) {
          setTogleMenu(!toggleMenu);
        }
      }
    }
    const menuMobil = ()=>{
      setMobil(!mobil);
    }
    const handledProducts = async()=>{
      try {if (state.token && isExpired(state.token)) {
        	await axios.get(API,{headers:{
					Authorization: `Bearer ${state.token.jwt}`
				}}).then(response=>{
					loadProducts(response.data);
				})
      }
			} catch (error) {
				loadError(error);
			}
    }
    React.useEffect(()=>{
      if (state.error) {
        console.log(state.error);
      }else{
        console.log(`Decode Token: `+ decodeToken(state.token))
        console.log(`Validation token: `+ isExpired(state.token))
      }
    },[state.error])
    console.log(`Token: ` + state.token);
    console.log(`State Loading: ` + state.loading);
    return (
    <nav>
    <img src= {IconMenu} alt="menu" className="menu" onClick={menuMobil}/>
      {mobil?<MenuMobil />:null}
    <div className="navbar-left">
      <img src= {Logo} alt="logos" className="logo"/>
      <ul>
        <li onClick={handledProducts}>
            All-Products
        </li>
        <li>
          Category
        </li>
        <li>
          Electronics
        </li>
        <li>
          Furnitures
        </li>
        <li>
          Toys
        </li>
        <li>
          Others
        </li>
      </ul>
    </div>
    <div className="navbar-right">
      <ul>
        <li className='register'>
          {state.email.length == 0?<Link to='create-account'>Register</Link>:''}
        </li>
        <li onClick={handleMenu} className="navbar-email" value="toggle">{state.email.length  !== 0?state.email:<Link to='/login'>Log-in</Link>}</li>
        <li className="navbar-shopping-cart" onClick={handleMyorder}>
          <img src={IconCart} alt="shopping cart" id="toggleOrder" value="toggleOrder"/>
          {state.cart.length > 0 ?<div>{state.cart.length}</div>:null}
        </li>
        {toggleMenu && <Menu /> } 
        {state.toggle?<MyOrder />:null}
      </ul>
    </div>
    </nav>
    );
    
}

export default MenuDesktop;