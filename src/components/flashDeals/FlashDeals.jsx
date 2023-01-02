import React from 'react'
import FlashCard from './FlashCard'
import './flashDeals.css'

import fData from './FData'

const FlashDeals = ({ addToCart }) => {
  const { productItems } = fData

  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>Flash Delas</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals