import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Store.css';
import Header from '../Sub-Components/Header/Header';
import Footer from '../Sub-Components/Footer/Footer';
import NamePriceCard  from '../Sub-Components/NamePriceCard/NamePriceCard';
import data from '../../MOCK_DATA.json'

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
              {data.map((product) => { return (<NamePriceCard key={product.id} id={product.id} name={product.name} price={product.price} img={product.img} imgAlt={product.name} /> )})}
            </div>
          </div>
         <Footer />
      </div>
    )}
}
            
export default Store;


