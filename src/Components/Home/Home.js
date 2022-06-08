import React from "react";
import { Link } from "react-router-dom";
import Header from "../Sub-Components/Header/Header";
import Footer from "../Sub-Components/Footer/Footer";
import NameCard from "../Sub-Components/NameCard/NameCard";
import '../../Styles/Home.css'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.hotProducts = [
      {
        id: 1,
        name: "Product 1",
        img: "https://via.placeholder.com/150",
        imgAlt: "Product 1"
      },
      {
        id: 2,
        name: "Product 2",
        img: "https://via.placeholder.com/150",
        imgAlt: "Product 2"
      },
      {
        id: 3,
        name: "Product 3",
        img: "https://via.placeholder.com/150",
        imgAlt: "Product 3"
      },
      {
        id: 4,
        name: "Product 4",
        img: "https://via.placeholder.com/150",
        imgAlt: "Product 4"
      }
    ]
  }
  render() {

    return (
      <div id='home'>
        <Header />
        <div id='homeBody'>
          <h1 id='homeTitle'> Buy Stuff Here</h1>
          <p id='homeDesc'>We have a variety of things that you could live without</p>
          <div id="homeHotProducts">
            {this.hotProducts.map((product) => {
              return (
                <NameCard key={product.id} id={product.id} img={product.img} imgAlt={product.imgAlt} name={product.name} />
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
