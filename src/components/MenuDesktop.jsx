import React,{useState,useContext} from 'react';
import '../styles/MenuDesktop.scss';
import IconCart from '../asset/icons/icon_shopping_cart.svg';
import Logo from '../asset/logos/logo_yard_sale.svg';
import IconMenu from '../asset/icons/icon_menu.svg';
import Menu from './Menu';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';
import { Link } from 'react-router-dom';
import MenuMobil from './MenuMobil';
import CreateAccount from '../pages/CreateAccount';
    
    const MenuDesktop = () => {

    const { state,toggleOrder } = useContext(AppContext);
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
    return (
    <nav>
    <img src= {IconMenu} alt="menu" className="menu" onClick={menuMobil}/>
      {mobil?<MenuMobil />:null}
    <div className="navbar-left">
      <img src= {Logo} alt="logos" className="logo"/>
      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
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