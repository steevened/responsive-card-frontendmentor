import React, { useState, useEffect } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

const Image = () => {
  const [windowsDimensions, setWindowsDimensions] =
    useState(getWindowDimensions)

  useEffect(() => {
    function handleResize() {
      setWindowsDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  console.log(windowsDimensions.width)
  return (
    <div className='basis-1/2 w-full h-full'>
      {windowsDimensions.width < 650 ? (
        <img
          className='h-full w-full'
          src='../../images/product.jpg'
          alt='image'
        />
      ) : (
        <img
          className='h-full w-full'
          src='../../images/image-product-desktop.jpg'
          alt='image'
        />
      )}
    </div>
  )
}

export default Image
