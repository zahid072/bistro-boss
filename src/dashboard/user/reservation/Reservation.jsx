import React from 'react'

const Reservation = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
     <div className='max-w-2xl bg-slate-200 rounded p-5 shadow-modal'>
      <form action="">
        <div >
          <input type="number" />
          <input type="date" />
        </div>
        <div>
          <input type="number"  placeholder='zip-code'/>
          <input type="number" placeholder=''/>
        </div>
      </form>
     </div>
    </div>
  )
}

export default Reservation
