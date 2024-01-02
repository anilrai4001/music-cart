// import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import Description from './pages/Description/Description'
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Success from './pages/Success/Success';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup  />} />
          <Route path='/login' element={<Login  />} />
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Description/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout/:id' element={<Checkout/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/success' element={<Success/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;






// name: '',
//     fullName: '',
//     brand: '',
//     price: '',
//     type: '',
//     color: '',
//     about: ['', '', '', '', ''],
//     images: ['', '', '', ''],
//     available: ''