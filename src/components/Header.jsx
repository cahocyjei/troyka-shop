import React, { useState, useContext } from 'react';
import '../styles/Header.scss';
import IconCart from '../asset/icons/icon_shopping_cart.svg';
import Logo from '../asset/logos/logo_yard_sale.svg';
import IconMenu from '../asset/icons/icon_menu.svg';
import Menu from '../components/Menu';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';
import { Link } from 'react-router-dom';

const Header = () => {
  const { state } = useContext(AppContext);
  const [toggleMenu,setTogleMenu]= useState(false);
  const [toggleMyorder,setToggleMyOrder] = useState(false);
  

  //Functions 
	const handleMenu = () => {
    if (state.email.length !== 0) {
      setTogleMenu(!toggleMenu);
      if (toggleMyorder) {
        setToggleMyOrder(!toggleMyorder)
      }
      
    }
	}

  const handleMyorder= () => {
    if (state.email.length !==0) {
      setToggleMyOrder(!toggleMyorder)
      if (toggleMenu) {
        setTogleMenu(!toggleMenu);
      }
    }
  }

    return (
    <nav>
    <img src= {IconMenu} alt="menu" className="menu" />

    <div className="navbar-left">
      <img src= {Logo} alt="logos" className="logo" />
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
        <li className='register'>{state.email.length == 0?'Register':''}</li>
        <li onClick={handleMenu} className="navbar-email" value="toggle">{state.email.length  !== 0?state.email:<Link to='/login'>Log-in</Link>}</li>
        <li className="navbar-shopping-cart" onClick={handleMyorder}>
          <img src={IconCart} alt="shopping cart" id="toggleOrder" value="toggleOrder"/>
          {state.cart.length > 0 ?<div>{state.cart.length}</div>:null}
        </li>
        {toggleMenu && <Menu /> } 
        {toggleMyorder && <MyOrder />}
      </ul>
    </div>
  </nav>
    );
}

export default Header;

