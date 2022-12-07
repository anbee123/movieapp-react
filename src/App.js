import {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
  const [movieData, setMovieData] = useState({})
  const [movieTitle, setMovieTitle] = useState('star wars')

fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=98e3fb1f`).then(movie =>{})
useEffect(() => {
  const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=98e3fb1f`;
  const makeApiCall = async () => {
    const res = await fetch(movieUrl)
    const json = await res.json()
    setMovieData(json)
  }
  makeApiCall()
}, [movieTitle])
console.log(movieData)
  return (
    <div className="App">
<Form /> 
< MovieDisplay />
    </div>
  );
}

export default App;
