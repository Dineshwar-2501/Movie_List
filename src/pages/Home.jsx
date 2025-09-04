import React, { useContext } from 'react'
import { UserBackpack } from '../context/UserBackpack'
import MovieCard from '../components/MovieCard'
import Navbar from '../components/Navbar'
const Home = () => {
  const data =useContext(UserBackpack)
  return (
    <div>
      <Navbar/>
      <MovieCard data={data}/>
    </div>
  )
}

export default Home