import {Link} from 'react-router-dom'

export const Taquillera = ({props}) => {
    
    return (
        <>
        <Link to={`/movie/${props.imdbID}`}>
            <img src={props.Poster} alt="poster de pelicula del momento" />
        </Link>
            <div>
                <h1 style={{fontSize: 50}}>{props.Title}</h1>
            </div>
        </>
    )
} 