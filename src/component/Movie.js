import React from 'react'
import {Rating} from '@mui/material'
const Movie = ({movie,onDelete}) => {

  
    return (
        <div >
              <h1>{movie.movieName}</h1>
              <i onClick={()=>onDelete(movie.id)} className='fas fa-window-close fa-2x'></i>
              <img src={movie.imgSrc} alt='cover' className='imgs' />
              <h2>{movie.describe}</h2>
              <Rating name="half-rating-read" defaultValue={movie.rating} precision={0.5} readOnly />

             
              
        </div>
    )
}

export default Movie
