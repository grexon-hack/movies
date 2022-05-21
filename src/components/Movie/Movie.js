import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import { useParams } from 'react-router-dom'
import './Movie.css';



export default function Movie() {

    const estado = useSelector(state => state.movieDetail);
    const dispatch = useDispatch();

    let { id } = useParams()

    
   useEffect(() => {
        dispatch(getMovieDetail(id))
   },[])


    return (
        <div className="movie-detail">
             
            <div className='card' key={estado.imdbID}>
                <div className="texto">
                    <h1>{estado.Title}</h1>
                    <span>Actores de Reparto: {estado.Actors} </span>
                    <br />
                    <span><strong>{estado.Awards}</strong></span>
                    <br />
                    <br />
                    <span>Pais de Origen: {estado.Country}</span>
                    <br />
                    <span>Año: {estado.Year}</span>
                    <br />
                    <strong>Escrita por : {estado.Writer}</strong>
                    <br />
                    <strong>Dirigida por: {estado.Director}</strong>
                    <br />
                    <span>Relansada: {estado.Released}</span>
                    <br />
                    <span>Genero: {estado.Genre}</span>
                    <h3>Descripción de la pelicula: </h3>
                    <p>{estado.Plot}</p>
                    <br />
                    <br />
                    <span>{estado.Language}</span>
                </div>
                <div className="poster">
                    <img src={estado.Poster} alt={`poster de la pelicula `} />
                </div>
            </div>
                
        </div>
    );

}
