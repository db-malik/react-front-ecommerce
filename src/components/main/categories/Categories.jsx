import React from 'react'
import categoriesData from './categoriesData'
const Categories = () => {
  return (
    <>
      <div className="category">
        {categoriesData.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
