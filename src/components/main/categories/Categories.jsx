import React from 'react'
import { Link } from 'react-router-dom'
import categoriesData from './categoriesData'
const Categories = () => {
  return (
    <>
      <div className="category">
        {categoriesData.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <Link to={`/products/${value.name}`}>
                <img src={value.cateImg} alt="" />
                <span>{value.cateName}</span>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
