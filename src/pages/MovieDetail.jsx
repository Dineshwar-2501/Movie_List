import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserBackpack } from '../context/UserBackpack'
const MovieDetail = () => {
  const {apidata} =useContext(UserBackpack)
  const {id}=useParams()
  const navi=useNavigate();
  const filterdata=apidata.filter(e=>e.id===id)
  console.log(typeof filterdata)
  return (

    <div>
      {filterdata.map((data)=>(
        <h1>{data.primaryTitle}</h1>
      ))}

      <button onClick={()=>navi('/')}>Back to home</button>
    </div>
  )
}

export default MovieDetail