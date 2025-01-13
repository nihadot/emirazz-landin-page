import React from 'react'
import imag from "../../assets/images/emiraaz white.png"
type Props = {}

function SplashScreen({}: Props) {
  return (
    <div className='flex justify-center items-center h-screen'>
        <img className='w-96 h-36 object-contain' src={imag} />
    </div>
  )
}

export default SplashScreen