import React from "react";
import { Link } from "react-router-dom";
import Header from "../Sub-Components/Header/Header";
import Footer from "../Sub-Components/Footer/Footer";
import NameCard from "../Sub-Components/NameCard/NameCard";
import '../../Styles/Home.css'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div id='home'>
        <Header itemsInCart={this.props.itemsInCart}/>
        <div id='homeBody'>
          <h1 id='homeTitle'> Buy Stuff Here</h1>
          <p id='homeDesc'>We have a variety of things that you could live without</p>
          <div id="homeHotProducts">
            {this.props.hotProducts.map((product) => {
              return (
                <NameCard key={product.id} id={product.id} img={product.img[0]} imgAlt={product.name} name={product.name} />
              )
            })}
          </div>
          <Link id="homeStoreLink" to='/store'>Start Shopping Now</Link>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;
