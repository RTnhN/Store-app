import React from 'react'
import '../../Styles/App.css';
import { BrowserRouter, Routes, Route, useParams, useLocation } from 'react-router-dom'
import Home from '../Home/Home';
import Store from '../Store/Store';
import Product from '../Product/Product';
// import Cart from '../Cart/Cart';
// import Contact from '../Contact/Contact';
import data from './MOCK_DATA.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      qty: 1,
      cart: []
    }
    this.incQuantity = this.incQuantity.bind(this)
    this.decQuantity = this.decQuantity.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.resetQuantity = this.resetQuantity.bind(this)
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

  resetQuantity() {
    this.setState({
      qty: 1
    })
  }
  
  addToCart(event) {
    const target = event.target.dataset.productId;
    if (this.state.cart.find(item => item.id === target)===undefined) {
      this.setState((prevState) => ({cart: [...prevState.cart, {'id':target, 'qty':prevState.qty}]}));
    } else {
      this.setState((prevState) => ({cart: prevState.cart.map(item => item.id === target ? {'id':target, 'qty':prevState.qty + item.qty} : item)}));
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home hotProducts={data.slice(0,3)} />} />
          <Route path='/store/:productId' element={<MakeProduct data={data} qty={this.state.qty} incQuantity={this.incQuantity} decQuantity={this.decQuantity} addToCart={this.addToCart} resetQuantity={this.resetQuantity} />} />
          <Route path='store' element={<Store data={data} />} />
            
          {/* <Route path='cart' element={<Cart />} /> */}
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
  return <Product product={product} qty={props.qty} incQuantity={props.incQuantity} decQuantity={props.decQuantity} addToCart={props.addToCart} resetQuantity={props.resetQuantity}/>
}

const Params = () => useParams()

export default App;
