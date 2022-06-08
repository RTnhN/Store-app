import React from 'react'
import '../../Styles/App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
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
      qty: 1
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home hotProducts={data.slice(0,3)} />} />
          <Route path='/store/:productId' element={<MakeProduct data={data} />} />
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
  console.log(data)
  return <Product product={product} />
}

export default App;
