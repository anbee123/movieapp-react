import {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
  const [movieData, setMovieData] = useState({});
  
  
    
    const makeApiCall = async (movieTitle) => {
      const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=98e3fb1f`;
      const res = await fetch(movieUrl);
      const json = await res.json();

      setMovieData(json)
    }
   

 

  console.log(movieData)
  return (
    <div className="App">
      <Form getMovie={makeApiCall}/>
      <MovieDisplay movie={movieData}/>
    </div>
  );
}

export default App;