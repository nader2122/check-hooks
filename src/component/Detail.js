
import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const Detail = ({movie}) => {
    return (
        
        <div style={{backgroundColor:'black',color:'white' , height:'100vh' , width:'100%'}}>
            <NavBar/>           
           <h1 style={{paddingTop:'20px', color:'red'}}>{movie.movieName}</h1>
           <ReactPlayer url={movie.trailer} controls loop width="80%"  style={{textAlign:'center', margin:'50px auto'}} />
           <p>{movie.describe}</p>
         
          <Link to='/' style={{textDecoration:'none',color:'yellow', border:'1px solid yellow',padding:'5px',margin:'20px', borderRadius:'4px'}}> 
          Go Back </Link>
              
        </div>
    )
}

export default Detail
