import React from 'react'
import SliderData from '../sliderData'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slideCard.css'

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: '0px' }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {SliderData.map((value, index) => {
          return (
            <React.Fragment key={index}>
              <div className="sliderCard box d_flex top">
                <div className="left desc">
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className="btn-primary">Visit Collections</button>
                </div>
                <div className="right">
                  <img src={value.cover} alt="" />
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
