import React, { useState, useContext } from 'react';
import '../styles/Header.scss';
import Shopping from '../asset/icons/icon_shopping_cart.svg';
import Logo from '../asset/logos/logo_yard_sale.svg';
import IconMenu from '../asset/icons/icon_menu.svg';
import Menu from '../components/Menu';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';

const Header = () => {
  const { state } = useContext(AppContext);

  const [toggle,setTogle]= useState(false);
  const $toggle = document.getElementById('toggle');
  const [toggleOrder,setToggleOrder] = useState(false);
  const $toggleOrder = document.getElementById('toggleOrder');
  //Function 
	const handleToggle = (event)=>{
    if (event.target.value === $toggle.value) {
      setTogle(!toggle);
      if (toggleOrder) {
        setToggleOrder(!toggleOrder);
      }
    }if (event.target.value === $toggleOrder.value) {
      setToggleOrder(!toggleOrder);
      if (toggle) {
        setTogle(!toggle);
      }
    }
	};
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
        <li onClick={handleToggle} className="navbar-email" id="toggle" value="toggle">troyka@gmail.com</li>
        <li className="navbar-shopping-cart" onClick={handleToggle}>
          <img src={Shopping} alt="shopping cart" id="toggleOrder" value="toggleOrder"/>
          {state.cart.length > 0 ?<div>{state.cart.length}</div>:null}
        </li>
        {toggle && <Menu /> } 
        {toggleOrder && <MyOrder />}
      </ul>
    </div>
  </nav>
    );
}

export default Header;