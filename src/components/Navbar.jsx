import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="flex flex-row justify-end bg-gray-950/10">
      <button className ='border-2 m-2 bg-gray-500/10 rounded-lg  p-2'>
        <Link to="/">Home</Link>
      </button>
      <button className ='border-2 m-2 bg-gray-500/10 rounded-lg  p-2'>
        <Link to="/favourite">Favourites</Link>
      </button>
      <button className ='border-2 m-2 bg-gray-500/10 rounded-lg  p-2'>
        <Link to="/images">ImageDownload</Link>
      </button>
    </div>
  )
}

export default Navbar