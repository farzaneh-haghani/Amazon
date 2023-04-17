import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Error from './components/Error';
import Login from './components/Login';
import AppContext from "./components/Context";
import './App.css';


function App() {
  const [basket, setBasket] = useState([]);
  return (
    <AppContext.Provider value={{ basket, setBasket }}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
