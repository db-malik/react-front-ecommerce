import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Header from './common/header/Header'
import Footer from './common/footer/Footer'
import HomePages from './pages/home/HomePages'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePages} />
          </Switch>
        </Router>

        <Footer />
      </Router>
    </>
  )
}

export default App
