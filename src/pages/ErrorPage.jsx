import React from 'react'
import error from '../assets/error.jpeg'
const ErrorPage = () => {
  return (
    <div className='flex justify-center text-center items-center'>
      <img src={error} alt="Not FOund" />
    </div>
  )
}

export default ErrorPage