import React from 'react'


const MenuBanner = ({menuImg, menuTitle}) => {
  return (
    <div>
      <div style={{backgroundImage: `url(${menuImg})`}} className='w-full bg-cover bg-no-repeat bg-center h-[400px] flex justify-center items-center'>
       <div className='w-3/5 mx-auto h-2/3 flex justify-center items-center' style={{background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`}}>
       <h1 className='text-4xl font-bold text-center text-white'>{menuTitle}</h1>
       </div>
      </div>
    </div>
  )
}

export default MenuBanner
