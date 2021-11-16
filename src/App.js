import { useState } from 'react';
import './App.css';
import {} from 'react-bootstrap';
import MovieList from './component/MovieList';
import Header from './component/Header';
import MovieAdd from './component/MovieAdd';
import FilterMovie from './component/FilterMovie';



function App() {
  const [show ,setShow]=useState(false);
  const [search, setSearch] = useState('');
  const [rate,setRate]=useState(0);
  const [movies, setMovies] = useState([
    {
      id: 1,
      imgSrc:
        'https://movies.universalpictures.com/media/nob-theatrical-fight-split-1-ondemandnow-en-us-716x1075-jpg-6087358a2c598-1.jpg',
      movieName: 'No body',
      describe: 'action Movie',
      rating:2

    },
    {
      id: 2,
      imgSrc:
        'https://cdn.vox-cdn.com/thumbor/KWq2rDyZR5SEc4XQN3-wDO5qSyk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16221040/parabellumcover.jpg',
      movieName: 'John wick',
      describe: 'action movie',
      rating:4
    },
    {
      id: 3,
      imgSrc:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
      movieName: 'lord of the ring',
      describe: 'action movie',
      rating:3
    },
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
      <Header showBtn={show} showForm={showForm}/>
      {show  &&  <MovieAdd onAdd={Adds}/> }
      
      
      <FilterMovie setSearch={setSearch} setRate={setRate}/> 
     
      
      <MovieList movies={movies} search={search} onDelete={DeletMovie} rate={rate}/>
      
    </div>
  );
}

export default App;
