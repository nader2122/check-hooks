import React from 'react'
import {Rating} from '@mui/material'
import { Link } from 'react-router-dom'

const Movie = ({movie,onDelete}) => {

  
    return (
        <div  style={{width:'300px',height:'450px',textDecoration:'none'}}>

            <i onClick={()=>onDelete(movie.id)} className='fas fa-window-close fa-2x'></i>
            <Link to={`/detail/ ${movie.id}`} style={{textDecoration:'none',color:'black'}}>
            <card>
                <h1>{movie.movieName}</h1>
              <img src={movie.imgSrc} alt='cover' className='imgs' />
              <p>{movie.describe}</p>
              
              <Rating name="half-rating-read" defaultValue={movie.rating} precision={0.5} readOnly />
              </card>  
              </Link>
              
             
              
        </div>
    )
    
}

export default Movie
