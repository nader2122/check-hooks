import { useState } from 'react';
import './App.css';
import MovieList from './component/MovieList';
import Header from './component/Header';
import MovieAdd from './component/MovieAdd';
import FilterMovie from './component/FilterMovie';
import { Route } from 'react-router';
import Detail from './component/Detail';
import NavBar from './component/NavBar';









function App() {
  const [show ,setShow]=useState(false);
  const [search, setSearch] = useState('');
  const [rate,setRate]=useState(0);
  const [movies, setMovies] = useState([
    {
      id:1,
      imgSrc:
        'https://movies.universalpictures.com/media/nob-theatrical-fight-split-1-ondemandnow-en-us-716x1075-jpg-6087358a2c598-1.jpg',
      movieName: 'No body',
      describe: 'Emmy winner Bob Odenkirk (Better Call Saul, The Post, Nebraska) stars as Hutch Mansell an underestimated and overlooked dad and husband.',
      rating:2,
      trailer:'https://www.youtube.com/watch?v=wZti8QKBWPo'

    },
    {
      id: 2,
      imgSrc:
        'https://cdn.vox-cdn.com/thumbor/KWq2rDyZR5SEc4XQN3-wDO5qSyk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16221040/parabellumcover.jpg',
      movieName: 'John wick',
      describe: 'In the film, John Wick goes on the run from a legion of assassins after a bounty is placed for his murder. The third installment was announced in June 2017.',
      rating:4,
      trailer:'https://www.youtube.com/watch?v=56pvThSsoSE'
    },
    {
      id: 3,
      imgSrc:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
      movieName: 'lord of the ring',
      describe: 'The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth',
      rating:3,
      trailer:'https://www.youtube.com/watch?v=tKd22o_7lUI'
    },
    {
      id:4,
      imgSrc:
        'https://www.mediaweek.com.au/wp-content/uploads/2019/12/jumanji-the-next-level-.gif',
      movieName: 'Jumanji',
      describe: 'With the month of March coming to an end last week we are now at the quarter-way mark for the calendar year and Mediaweek is examining the box office results to date for 2020.',
      rating:4,
      trailer:'https://www.youtube.com/watch?v=2QKg5SZ_35I'
    },
    {
      id: 5,
      imgSrc:
        'https://img.jagranjosh.com/imported/images/E/GK/bafta-2020-1917.jpg',
      movieName: '1917',
      describe: 'The British Academy Film and Television Arts Awards (BAFTA) ceremony held at the Royal Albert Hall, London February 03, 2020. This event honored the best national and international films of the year 2019',
      rating:3,
      trailer:'https://www.youtube.com/watch?v=YqNYrYUiMfg'
    },
    {
      id: 6,
      imgSrc:
        'https://images.hdqwalls.com/wallpapers/the-joker-2020-v4.jpg',
      movieName: 'The Joker',
      describe: 'The success of “Joker” is notable for a few reasons. First, Phillips scooped up double nominations for both the screenplay category and directing. Also, the film is now the most nominated “comic book movie” in Oscars history',
      rating:5,
      trailer:'https://www.youtube.com/watch?v=zAGVQLHvwOY'
    }
  ]);

  const Adds = (movie) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newMovie = { id, ...movie };
    setMovies([...movies, newMovie]);
  };
  const DeletMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };
const showForm=()=>{setShow(!show)}

  return (

   

   

    <div className="Apps">
<div>
        
       <Route path='/'exact render={props=>(
       
       <div>   
         <NavBar />
            <Header showBtn={show} showForm={showForm}/>
            {show  &&  <MovieAdd onAdd={Adds}/> }
        
            
      <FilterMovie setSearch={setSearch} setRate={setRate}/> 
          
      <MovieList movies={movies} search={search} onDelete={DeletMovie} rate={rate}/>
    
      </div>  
       )
  }/>

     <Route path='/detail/:id' render={props=>{
         
       const id = Number(props.match.params.id) ;
       const movie = movies.find(movie=> movie.id === id)
       return <Detail movie = {movie} />
     }
    
    }/>
    
    </div>

     </div>
      
    
  );
}

export default App;
