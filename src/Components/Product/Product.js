import React from "react";
import { Link } from "react-router-dom";
import Header from "../Sub-Components/Header/Header";
import Footer from "../Sub-Components/Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../../Styles/Product.css"

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.resetQuantity();
  }


  render() {
    return (
      <div id="product" >
        <Header itemsInCart={this.props.itemsInCart}/>
        <div id="productBody">
          <Link id="productBackLink" to="/store">Back to Store</Link>
          <h1 id="productTitle">{this.props.product.name}</h1>
          <Carousel>
            {this.props.product.img.map((img, index) => {return(
              <div key={index}>
                <img src={img} />
              </div>
            )})}
          </Carousel>
          <p id="productDesc">{this.props.product.desc}</p>
          <p id="productPrice">{this.props.product.price}</p>
          <button onClick={this.props.addToCart} id='addToCartButton' data-product-id={this.props.product.id}>Add to Cart</button>
          <div id='qtyContainer'>
            <button onClick={this.props.decQuantity} className='material-symbols-outlined'>remove</button>
            <p>{this.props.qty}</p>
            <button onClick={this.props.incQuantity} className='material-symbols-outlined'>add</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Product;