import React, { useContext } from 'react'
import { UserBackpack } from '../context/UserBackpack'
import girl from '../assets/girl.jpeg'
import mistake from '../assets/mistake.jpeg'
import error from '../assets/error.jpeg'
import anime from '../assets/anime.jpeg'
import { useNavigate } from 'react-router-dom'
const Images = () => {
  const navi=useNavigate();
  const { apidata } = useContext(UserBackpack)
  return (
    <div>
      <button className='bg-gray-500/10 p-2 m-2 rounded-xl border-2' onClick={(e)=>navi('/')}>Back to home</button>
      <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-3 '>
        {apidata.map((item, i) => (
          <div key={i}>
            <img src={item.primaryImage || girl} alt={item.primaryTitle} />
            <a href={item.primaryImage || girl} download={item.primaryTitle}>
              <button className='bg-gray-500/10 p-2 m-2 rounded-xl border-2'>Download</button>
            </a>
          </div>
        ))}
        <div>
          <img src={mistake} alt="" />
          <a href={mistake} download="">
            <button className='bg-gray-500/10 p-2 m-2 rounded-xl border-2'>Download</button>
          </a>
        </div>
        <div>
          <img src={error} alt="" />
          <a href={error} download="">
            <button className='bg-gray-500/10 p-2 m-2 rounded-xl border-2'>Download</button>
          </a>
        </div>
        <div>
          <img src={anime} alt="" />
          <a href={anime} download="">
            <button className='bg-gray-500/10 p-2 m-2 rounded-xl border-2'>Download</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Images