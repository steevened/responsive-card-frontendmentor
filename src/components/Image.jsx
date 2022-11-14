import React, { useState, useEffect } from 'react'
import mobile from '../assets/product.jpg'
import desktop from '../assets/desk.jpg'

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
        <img className='h-full w-full' src={mobile} alt='image' />
      ) : (
        <img className='h-full w-full' src={desktop} alt='image' />
      )}
    </div>
  )
}

export default Image
