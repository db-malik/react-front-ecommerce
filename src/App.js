import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Header from './common/header/Header'
import Footer from './common/footer/Footer'
import Data from './data/Data'
import shopData from './components/shops/Sdata'
import HomePages from './pages/home/HomePages'

function App() {
  const { productItems } = Data
  const { shopItems } = shopData

  const [CartItem, setCartItem] = useState([])

  return (
    <>
      <Router>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePages} />
            {/* <Route exact path="/Product" component={<div>product</div>} />
            <Route exact path="/cart" component={<div>cart</div>} /> */}
          </Switch>
        </Router>

        <Footer />
      </Router>
    </>
  )
}

export default App
