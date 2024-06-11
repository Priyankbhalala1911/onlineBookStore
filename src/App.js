import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/navbar/Home/home'
import Navbar from './components/navbar/navbar';
import Contact from './components/navbar/Contact/Contact';
// import SlideImage from "./components/slide image/slideImage"
import SlideTop from './SlideTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SlideCaption from './components/slide image/caption';
import Footer from './components/footer/footer';
import Signup from "./components/authentication/signUp"
import Login from './components/authentication/login';
import Store from './components/navbar/store/store';
import BookDetail from './components/displayBook/bookDetail';
import { CartProvider } from "react-use-cart";
import CartDetails from './components/cart/CartDetails';
import Quiz from './components/Quiz/quiz';
import Payment from './components/Payment/payment';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <SlideTop />
        <Navbar />
        <SlideCaption />
        {/* <SlideImage/> */}

        <CartProvider>
          <Routes>
            <Route index element={<Home />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/Contact' element={<Contact />} />
            <Route exact path='/bookstore' element={<Store />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/bookstore/bookdetails' element={<BookDetail />} />
            <Route exact path='/cartdetails' element={<CartDetails />} />
            <Route exact path='/quiz' element={<Quiz />} />
            <Route exact path='/cartdetails/payment' element={<Payment />} />

          </Routes>
          <ToastContainer />
        </CartProvider>
        <Footer />
        
      </BrowserRouter>

    </div>
  )
}

export default App
