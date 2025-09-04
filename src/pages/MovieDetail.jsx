import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserBackpack } from '../context/UserBackpack'
const MovieDetail = () => {
  const {apidata} =useContext(UserBackpack)
  const {id}=useParams()
  const filterdata=apidata.filter(e=>e.id===id)
  console.log(typeof filterdata)
  return (
    <div>
      {filterdata.map((data)=>(
        <p>{data.primaryTitle}</p>
      ))}
    </div>
  )
}

export default MovieDetail