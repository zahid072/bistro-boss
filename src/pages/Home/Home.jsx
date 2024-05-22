import React from 'react'
import Banner from '../../components/banner/Banner'
import PopularMenu from '../popularMenu/PopularMenu'

const Home = () => {
  return (
    <div>
      <Banner/>
      <div className='my-10 '>
        <PopularMenu menuCategory={"popular"} menuTitle={"Popular Menu"}/>
      </div>
    </div>
  )
}

export default Home
