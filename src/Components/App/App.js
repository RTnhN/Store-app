import React from 'react'
import '../../Styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home/Home';
// import Store from '../Store/Store';
// import Cart from '../Cart/Cart';
// import Contact from '../Contact/Contact';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='store' element={<Store />} > */}
            {/* <Route path=':productId' element={<Item />} /> */}
          {/* </Route> */}
          {/* <Route path='cart' element={<Cart />} /> */}
          {/* <Route path='contact' element={<Contact />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
