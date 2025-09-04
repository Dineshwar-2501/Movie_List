import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import girl from '../assets/error.jpeg'
const MovieCard = ({data}) => {

  const toogleFavourite =(id)=>{
    if(data.favourite.includes(id)){
      data.getFavourite(data.favourite.filter(i=>i!==id))
    }else{
      data.getFavourite(prev=>[...prev,id])
    }
  }

  return (
    <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-3 '>
      
{data.apidata&&data.apidata.length>0?(
  data.apidata.map((card,i)=>(
    <Link to={`/movies/${card.rank}`} key={i} className='p-3 m-5 border-2 bg-green-400/10 rounded-xl cursor-pointer hover:shadow-lg transition block' >
      
        <button  onClick={(e)=>{
          e.preventDefault();
          toogleFavourite(card.rank)} }>
            {data.favourite.includes(card.rank)?"💖":"💔" }</button>
          <img  src={card.image||girl} alt={card.title} />
          <h1>{card.title}</h1>
          <p>year:{card.year}</p>
      </Link>
    ))
):(
  <p>loading...</p>
)}

    </div>
  )
}

export default MovieCard