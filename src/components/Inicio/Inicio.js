import { useEffect  } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addMovieFavorite, mostrarPelisInicio } from '../../actions'
import './Inicio.css'
import { Taquillera } from "../mostrador/Taquillera";

export default function Inicio() {

    const show = useSelector((state) => state.showMovies);
    const dispatch = useDispatch();

    
    

    useEffect(() => {
       if(show.length === 0) {

           dispatch(mostrarPelisInicio())
           
       } 
        
    },[]);
    
    
    return (
        !show.length?<h1 style={{textAlign: 'center'}}>Cargando...</h1>:(<div className="box-container">
            <div className="mostrador">
                <h1>Película más Taquillera Del Momento</h1>
               { show.length !== 0 &&(<div className="mostrador-pelis">
                < Taquillera props ={show[0]}/>
                </div>)}
            </div>
            <div className="box">
            {
                show.map((elem) => {
                    return (
                        
                        <div key={elem.imdbID}>

                            <h3>{elem.Title}</h3>
                                <div className="box-image">
                                    <Link to={`/movie/${elem.imdbID}`}>
                                    <img src={elem.Poster} alt="poster de pelicula" />
                                    </Link>
                                </div>
                            <button onClick={() => dispatch(addMovieFavorite({title: elem.Title, id: elem.imdbID, img: elem.Poster}))}>Favorita</button>
                        </div>
                    )
                })
            }
            </div>

        </div>)
    )

}