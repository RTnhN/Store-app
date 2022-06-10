import React from "react";
import { Link } from "react-router-dom";
import Header from "../Sub-Components/Header/Header";
import Footer from "../Sub-Components/Footer/Footer";
import HotProductCard from "../Sub-Components/HotProductCard/HotProductCard";
import '../../Styles/Home.css';


class Home extends React.Component {
  render() {

    return (
      <div className="pageTopLevel" id='home'>
        <Header itemsInCart={this.props.itemsInCart}/>
        <div className='body' id='homeBody'>
          <h1 className="title" id='homeTitle'> Buy Stuff Here</h1>
          <p id='homeDesc'>We have a variety of things that you could live without <br/> Just look at these hot products</p>
          <div id="homeHotProducts">
            {this.props.hotProducts.map((product) => {
              return (
                <HotProductCard key={product.id} id={product.id} img={product.img[0]} imgAlt={product.name} name={product.name} />
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
