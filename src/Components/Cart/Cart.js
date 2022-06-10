import React from "react";
import Header from "../Sub-Components/Header/Header";
import Footer from "../Sub-Components/Footer/Footer";
import CartCard from "../Sub-Components/CartCard/CartCard";
import "../../Styles/Cart.css";
class Cart extends React.Component {
  render() {
    const cartItems = interleave(this.props.cart.map(product => (
      <CartCard key={product.id}
        item={product}
        decQuantity={this.props.decItem}
        incQuantity={this.props.incItem}
        removeFromCart={this.props.removeFromCart}
        updateItem={this.props.updateItem}
      />)), <hr/>)

    return (
      <div className="pageTopLevel" id="cart">
        <Header itemsInCart={this.props.itemsInCart} />
        <div className='body' id="cartBody">
          <h1 className="title" id="cartTitle">Cart</h1>
          <div id="cartTotalCheckout">
            <p id="cartTotalPrice">{`Total: ${this.props.cartTotal}`}</p>
            <button id="checkoutButton" onClick={()=>window.location = 'https://www.youtube.com/watch?v=iik25wqIuFo'} >Checkout</button>
          </div>
          <div id="cartProducts">
            {cartItems}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}

const interleave = (arr, x) => arr.flatMap(e => [e, x]).slice(0, -1)

export default Cart;