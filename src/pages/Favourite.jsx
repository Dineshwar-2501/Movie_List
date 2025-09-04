import React, { useContext } from 'react'
import { UserBackpack } from '../context/UserBackpack'
import girl from '../assets/anime.jpeg'
import { useNavigate } from 'react-router-dom'

const Favourite = () => {
  const { favourite, apidata } = useContext(UserBackpack)
  const navi=useNavigate()
  const filteredArray = apidata.filter(e => favourite.includes(e.rank))
  return (<>
 
    <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-3'>
      
      {filteredArray.map((movie, i) => (
        <div key={i} className='p-3 m-5 border-2 bg-green-400/10 rounded-xl cursor-pointer hover:shadow-lg transition block'>
          <img src={movie.image || girl} className='bg-black ' alt={movie.title} />
          <h1>{movie.title}</h1>
          <p>year:{movie.year}</p>
        </div>
      ))}
    </div>
    <button onClick={()=>navi("/")} className='border-2 rounded-xl p-2 m-2 bg-gray-500/10'>Back to Home</button>
    </>
  )
}

export default Favourite 