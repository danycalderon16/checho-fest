import React from 'react'

import more from './img/more.png'

export const Comida = () => {


  return (
    <div className='mt-10'>
      <h2 className='mb-4 text-5xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl text-center'>Empezaremos calentando ocico en La More</h2>
      <h3 className='text-3xl ml-2 font-semibold text-gray-500 dark:text-gray-400 text-center'>Un lugar que como suele decir el festejado 'entre más corriente, más ambiente'</h3>

      <p className='text-2xl text-center m-2'>Lugar</p>
      <div className="container text-center flex items-center mb-7">

        <a className='bg-slate-500 text-center' href='https://www.google.com.mx/maps/place/La+More+Restaurant/@21.4963631,-104.8897298,347m/data=!3m1!1e3!4m6!3m5!1s0x8427371e639f777f:0x8c79e959942bb943!8m2!3d21.4963482!4d-104.8895239!16s%2Fg%2F11f53f5h2l'
          target='_blank'>
          <img className="rounded-lg hover:cursor-pointer text-center" src={more} alt="image description" />
        </a>
      </div>


    </div>
  )
}
