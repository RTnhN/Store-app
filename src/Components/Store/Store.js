import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Store.css';
import Header from '../Sub-Components/Header/Header';
import Footer from '../Sub-Components/Footer/Footer';
import NamePriceCard  from '../Sub-Components/NamePriceCard/NamePriceCard';

class Store extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div id='store'>
         <Header />
          <div id='storeBody'>
            <h1 id='storeTitle'>Store</h1>
            <div id='storeProducts'>
              {this.props.data.map((product) => { return (<NamePriceCard key={product.id} id={product.id} name={product.name} price={product.price} img={product.img[0]} imgAlt={product.name} /> )})}
            </div>
          </div>
         <Footer />
      </div>
    )}
}
            
export default Store;


