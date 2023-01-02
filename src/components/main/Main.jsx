import React from 'react'
import Categories from './categories/Categories'

import Slider from './slider/Slider'

const Main = () => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Categories />
          <Slider />
        </div>
      </section>
    </>
  )
}

export default Main
