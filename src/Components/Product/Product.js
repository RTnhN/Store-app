import React from "react";
import Header from "../Sub-Components/Header/Header";
import Footer from "../Sub-Components/Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../../Styles/Product.css"

class Product extends React.Component {
  componentWillUnmount() {
    this.props.resetQuantity();
  }


  render() {
    return (
      <div id="product" >
        <Header itemsInCart={this.props.itemsInCart} />
        <div id="productBody">
          <h1 id="productTitle">{this.props.product.name}</h1>
          <div id="productContent">
          <Carousel>
            {this.props.product.img.map((img, index) => {
              return (
                <div key={index}>
                  <img src={img} alt={this.props.product.name} />
                </div>
              )
            })}
          </Carousel>
          <div id="productText">
            <p id="productDesc">{this.props.product.desc}</p>
            <p id="productPrice">{this.props.product.price}</p>
            <button onClick={this.props.addToCart} id='addToCartButton' data-product-id={this.props.product.id}>Add to Cart</button>
            <div id='qtyContainer'>
              <button onClick={this.props.incQuantity} className='material-symbols-outlined'>add</button>
              <input onChange={this.props.setQuantity} value={this.props.qty} type="text" />
              <button onClick={this.props.decQuantity} className='material-symbols-outlined'>remove</button>
            </div>
          </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Product;