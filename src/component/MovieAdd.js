import React from 'react'
import { useState } from 'react'
import { Rating } from '@mui/material'


const MovieAdd = ({onAdd}) => {
    
     const [movieName, setMovieName] = useState('')
    const [describe, setDescribe] = useState('')
     const [imgSrc, setImgSrc] = useState('')
     const [rating , setRating]=useState(0)


     const onSubmit=(e)=>{
        e.preventDefault();
        if(!movieName){
        alert('Please enter title movie')
        return
        }
        onAdd({movieName,describe,imgSrc,rating})
        
        setMovieName('')
        setImgSrc('')
        setDescribe('')
        setRating(0)
        
        
    }

    return (
        <div className='mov-add'>
           <form onSubmit={onSubmit}>
               <label>Title
              <input type='text'  placeholder='Put your Movie Name...'
                value={movieName}
                onChange={(e)=>setMovieName(e.target.value)}
                />
                </label>

              <label>Image

              <input src={imgSrc} alt="cov" 
              placeholder="https://..."
              onChange={(e)=>setImgSrc(e.target.value)} />
              
              </label>

               <label>Describe      
               <input type="text" placeholder='Resume...'
               value={describe}
               onChange={(e)=>setDescribe(e.target.value)}
               />
               </label> 
               <label>Rating
                   <br/>
               <Rating name="half-rating-read" size="large" value={rating} precision={0.5} onChange={(e)=>setRating(e.target.value)} />
               </label>
            
                <br/>

               <input type="submit" value="Add Movie" className='add-movie'/>
               
               </form> 
               

        </div>
    )
}

export default MovieAdd
