import { useState } from "react";
const Form = (props) => {
    const [movieTitle, setMovieTitle] = useState('star wars');

    const handleChange = (event) => {
        setMovieTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.getMovie(movieTitle)
    }

  return (
    <div>
      <h1>The Form component</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={movieTitle}/>
        <input type='submit' value='submit' />
      </form>
    </div>
  );
};

export default Form;