import React, { useState } from 'react';
import '../styles/Header.scss';
import Shopping from '../asset/icons/icon_shopping_cart.svg';
import Logo from '../asset/logos/logo_yard_sale.svg';
import IconMenu from '../asset/icons/icon_menu.svg';
import Menu from '../components/Menu'

const Header = () => {
  const [toggle,setTogle]= useState(false);
	const handleToggle = ()=>{
		setTogle(!toggle);
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
        <li onClick={handleToggle} className="navbar-email">platzi@example.com</li>
        <li className="navbar-shopping-cart">
          <img src={Shopping} alt="shopping cart" />
          <div>2</div>
        </li>
        {toggle && <Menu /> } 
      </ul>
    </div>
  </nav>
    );
}

export default Header;