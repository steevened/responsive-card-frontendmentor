import { useState } from 'react'

import './App.css'

function App() {
  // bg-[url("../design/mobile-design.jpg")]
  return (
    <div className='App h-[667px]   lg:h-screen lg:flex lg:items-center lg:justify-center  bg-cream bg-no-repeat  px-4 py-7 bg-[hsl(30, 38%, 92%)]'>
      <div className='overflow-hidden lg:flex rounded-[10px] lg:w-[600px] lg:h-[450px] lg:mt-[40px]'>
        <div className='basis-1/2'>
          <img
            className='h-full w-full'
            src='../images/image-product-mobile.jpg'
            alt='product'
          />
        </div>
        <div className='px-6 py-5 bg-white lg:basis-1/2'>
          <h3 className='text-[15px] tracking-[2.5px] montse'>PERFUME</h3>
          <h1 className='text-[32px] font-bold leading-8 mt-2 fran'>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className='text-sm leading-[23.5px] mt-4 montse'>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className='flex mt-[14px] items-center gap-5'>
            <h2 className='text-[34px] tracking-[0.1px]  fran'>$149.99 </h2>
            <h3 className='text-[13px]  montse'>$169.99</h3>
          </div>
          <button className='rounded-lg mt-2 flex gap-[12px] h-[50px] w-full justify-center items-center bg-darkcyan'>
            <img className='' src='../images/icon-cart.svg' alt='icon cart ' />
            <h4 className='text-white text-[15px] font-bold'> Add to Cart</h4>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
