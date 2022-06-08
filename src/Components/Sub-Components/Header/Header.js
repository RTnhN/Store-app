import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Styles/Header.css';

function Header(props) {
  return (
    <header id='header'>
      <div id='headerSubcontainer'>
      <h1 id='companyName'>Mega Corp</h1>  
      <nav id='pageNav'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/store'>Store</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
      <Link to='/Cart'>
        <span>Cart</span>
        <span className='material-symbols-outlined'>shopping_cart</span>  
      </Link>
      </div>
    </header>
  )
}

export default Header
