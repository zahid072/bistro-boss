import React from 'react'
import shopImg from "../../assets/shop/banner2.jpg"
import ShopNavbar from './ourShopNav/ShopNavbar'

const OurShop = () => {
  return (
    <div>
       <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${shopImg})`,
        }}
        className="w-full bg-cover bg-no-repeat bg-center h-[400px] flex justify-center items-center"
      >
        <h1 className="text-4xl font-bold text-center text-white">Our Shop</h1>
      </div>
      <div className='mt-6 max-w-6xl mx-auto'>
        <ShopNavbar/>
      </div>
    </div>
  )
}

export default OurShop