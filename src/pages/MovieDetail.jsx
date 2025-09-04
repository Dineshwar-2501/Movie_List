import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserBackpack } from '../context/UserBackpack'
const MovieDetail = () => {
  const {apidata} =useContext(UserBackpack)
  const {rank}=useParams()
  const navi=useNavigate();
  const filterdata=apidata.filter(e=>e.rank===rank)
  console.log(typeof filterdata)
  return (

    <div>
      {filterdata.map((data)=>(
        <h1>{data.title}</h1>
      ))}

      <button onClick={()=>navi('/')}>Back to home</button>
    </div>
  )
}

export default MovieDetail