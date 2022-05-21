import  {  useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovies } from "../../actions";
// import Inicio from "../Inicio/Inicio";
import './Buscador.css';
import logo from './image/conejito.png'


export default function Buscador() {

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesLoaded)

  const [state, setState] = useState('');

  function handleChange(e) {
    setState(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getMovies(state));
    setState('');
  }

  return (
      <div className="container-full">
        <h1>Buscador</h1>
        <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
            className="input-text"
              placeholder="Peliculas..."
              type="text"
              id="title"
              autoComplete="off"
              value={state}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <div className="movies">
        
         {
           
           movies? movies.map((pelis) => {
             return (
               <div key={pelis.imdbID} className='cards'>
                  <h3>{pelis.Title}</h3>
                <Link to={`/movie/${pelis.imdbID}`}>
                  <img src={pelis.Poster} alt={`ya no se encuentra en taquilla la pelicula ${pelis.Title}`}/>
                </Link>
                  <button onClick={() => {
                    dispatch(addMovieFavorite({title: pelis.Title, id: pelis.imdbID, img: pelis.Poster}))
                  }}>Favorite</button>
               </div>
               
            )
              
             
          }): (
            <div>
            <h1>Lo sentimos, película no encontrada</h1>
            <img src={logo} alt="conejito triste" />
          </div>
          )
         }
        
        </div>
      </div>
  );

}
