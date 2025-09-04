import React, { useContext } from 'react'
import { UserBackpack } from '../context/UserBackpack'
import girl from '../assets/anime.jpeg'
import { useNavigate } from 'react-router-dom'

const Favourite = () => {
  const { favourite, apidata } = useContext(UserBackpack)
  const navi=useNavigate()
  const filteredArray = apidata.filter(e => favourite.includes(e.id))
  return (<>
 
    <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-3'>
      
      {filteredArray.map((movie, i) => (
        <div key={i} className='p-3 m-5 border-2 bg-green-400/10 rounded-xl cursor-pointer hover:shadow-lg transition block'>
          <img src={movie.primaryImage || girl} className='bg-black ' alt={movie.primaryTitle} />
          <h1>{movie.primaryTitle}</h1>
          <p>year:{movie.startYear}</p>
        </div>
      ))}
    </div>
    <button onClick={()=>navi("/")} className='border-2 rounded-xl p-2 m-2 bg-gray-500/10'>Back to Home</button>
    </>
  )
}

export default Favourite 