import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Styles/Header.css';

function Header(props) {
  let itemsInCart;
  if (props.itemsInCart < 1) {
    itemsInCart = "";
  } else if (props.itemsInCart === 1) {
    itemsInCart = '1 item in cart';
  } else if (props.itemsInCart >= 1 && props.itemsInCart <= 9) {
    itemsInCart = `${props.itemsInCart} items in cart`;
  } else {
    itemsInCart = "9+ items in cart";
  }

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
        <span id='cartIcon' className='material-symbols-outlined' value={itemsInCart}>shopping_cart</span>  
      </Link>
      </div>
    </header>
  )
}

export default Header
