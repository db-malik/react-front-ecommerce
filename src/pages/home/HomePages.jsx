import React from 'react'
import Announcement from '../../components/announcement/Announcemet'
import Discount from '../../components/discount/Discount'
import FlashDeals from '../../components/flashDeals/FlashDeals'
import Main from '../../components/main/Main'
import NewArrivals from '../../components/newarrivals/NewArrivals'
import TopCate from '../../components/top/TopCate'

const HomePages = () => {
  return (
    <div>
      <Main />
      <FlashDeals />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Announcement />
    </div>
  )
}

export default HomePages
