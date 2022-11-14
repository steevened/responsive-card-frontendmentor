import { useEffect, useState } from 'react'
import Cart from './components/Cart'
import './App.css'
import Image from './components/Image'

function App() {
  const [isCharged, setisCharged] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setisCharged(true)
    }, 2000)
  }, [])

  return (
    <div className='App h-[667px] md:h-screen  bg-no-repeat flex items-center justify-center bg-cream  px-4 py-7 bg-[hsl(30, 38%, 92%)]'>
      <div className='overflow-hidden flex flex-col md:flex-row rounded-[10px] md:w-[600px]  md:h-[450px] '>
        {/* <div className='basis-1/2 bg-[url(../images/product.jpg)] lg:bg-[url(../images/image-product-desktop.jpg)] bg-cover bg-left'></div> */}
        <Image />
        <div className='px-6 py-5 md:px-8 md:py-7 bg-white md:basis-1/2 '>
          <h3 className='text-[15px] md:mt-2 tracking-[2.5px] montse text-grayishblue'>
            PERFUME
          </h3>
          <h1 className='text-[32px] font-bold leading-8 mt-2 fran'>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className='text-sm text-grayishblue leading-[23.5px] mt-4 montse md:mt-6'>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className='flex mt-[14px] items-center gap-5 md:mt-[17px]'>
            <h2 className='text-[34px] text-darkcyan font-bold tracking-[0.1px]  fran'>
              $149.99{' '}
            </h2>
            <h3 className='text-[13px] text-grayishblue  montse'>
              <strike>$169.99</strike>{' '}
            </h3>
          </div>
          <button className='rounded-md mt-2 md:m-5 md:mx-0 flex gap-[12px] h-[50px] w-full justify-center items-center bg-darkcyan hover:bg-darkblue'>
            <Cart />
            <h4 className='text-white text-[15px] font-bold'> Add to Cart</h4>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
