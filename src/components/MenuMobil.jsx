import React from 'react'
import '../styles/MenuMobil.scss';

const MenuMobil = () => {

    return (
    <nav className='nav-mobile'>
    <div className="navbar-left-mobile">
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
    </nav>

    );
}

export default MenuMobil;