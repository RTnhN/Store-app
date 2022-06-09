import React from 'react'
import '../../Styles/App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from '../Home/Home';
import Store from '../Store/Store';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
// import Contact from '../Contact/Contact';
import data from './MOCK_DATA.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      qty: 1,
      cart: [],
      itemsInCart: 0
    }
    this.incQuantity = this.incQuantity.bind(this)
    this.decQuantity = this.decQuantity.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.resetQuantity = this.resetQuantity.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.incItem = this.incItem.bind(this)
    this.decItem = this.decItem.bind(this)
    this.setQuantity = this.setQuantity.bind(this)
  }

  incQuantity() {
    this.setState({
      qty: this.state.qty + 1
    })
  }

  decQuantity() {
    if (this.state.qty > 1) {
      this.setState({
        qty: this.state.qty - 1
      })
    }
  }

  setQuantity(event) {
    if (!Number.isNaN(Number(event.target.value))) {
      const qty = event.target.value === '' ? "" : Number(event.target.value)
      this.setState({
        qty: qty === 0 ? 1 : qty
      })
    }
  }

  resetQuantity() {
    this.setState({
      qty: 1
    })
  }
  
  addToCart(event) {
    const target = event.target.dataset.productId;
    if (this.state.cart.find(item => item.id === target)===undefined) {
      this.setState((prevState) => ({cart: [...prevState.cart, {'id':target, 'qty':prevState.qty}], itemsInCart: prevState.itemsInCart+prevState.qty}));
    } else {
      this.setState((prevState) => ({cart: prevState.cart.map(item => item.id === target ? {'id':target, 'qty':prevState.qty + item.qty} : item), itemsInCart: prevState.itemsInCart+prevState.qty}));
    }
  }

  removeFromCart(event) {
    const target = event.target.parentElement.parentElement.id;
    this.setState((prevState) => (
      {cart: prevState.cart.filter(item => item.id !== target), 
        itemsInCart: prevState.itemsInCart-prevState.cart.find(item => item.id === target).qty}));
  }
  
  incItem(event) {
    const target = event.target.parentElement.parentElement.id;
    this.setState((prevState) => (
      {cart: prevState.cart.map(item => 
        item.id === target 
        ? {'id':target, 'qty':item.qty+1} 
        : item), 
      itemsInCart: prevState.itemsInCart+1}));
  }

  decItem(event) {
    const target = event.target.parentElement.parentElement.id;
    if (this.state.cart.find(item => item.id === target).qty > 1) {
      this.setState((prevState) => (
        {cart: prevState.cart.map(item => 
          item.id === target 
          ? {'id':target, 'qty':item.qty-1} 
          : item), 
        itemsInCart: prevState.itemsInCart-1}));
    } else {
      this.removeFromCart(event);
    }
  }



  render() {
    return (
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path='' element={<Home hotProducts={data.slice(0,3)} itemsInCart={this.state.itemsInCart} />} />
          <Route path='/store/:productId' element={<MakeProduct data={data} qty={this.state.qty} incQuantity={this.incQuantity} decQuantity={this.decQuantity} addToCart={this.addToCart} resetQuantity={this.resetQuantity} itemsInCart={this.state.itemsInCart} />} />
          <Route path='store' element={<Store data={data} itemsInCart={this.state.itemsInCart} />} /> 
          <Route path='cart' element={<MakeCart cart={this.state.cart} data={data} removeFromCart={this.removeFromCart} incItem={this.incItem} decItem={this.decItem} itemsInCart={this.state.itemsInCart} />} />
          {/* <Route path='contact' element={<Contact />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    )
  }
}

function MakeProduct(props) {
  const { productId } = useParams();
  const product =  props.data.find(product => product.id === productId)
  return <Product product={product} qty={props.qty} incQuantity={props.incQuantity} decQuantity={props.decQuantity} addToCart={props.addToCart} resetQuantity={props.resetQuantity} itemsInCart={props.itemsInCart}/>
}

function MakeCart(props) {
  const cartItems = props.cart.map(item => ({...props.data.find(product=>product.id === item.id), qty: item.qty}))
  const cartTotal = "$"+Math.round(cartItems.reduce((acc, item) => acc + Number(item.price.slice(1)) * item.qty, 0)*100)/100
  return <Cart cart={cartItems} removeFromCart={props.removeFromCart} incItem={props.incItem} decItem={props.decItem} itemsInCart={props.itemsInCart} cartTotal={cartTotal} />
}


export default App;
