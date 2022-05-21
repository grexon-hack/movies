export  const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const GET_MOVIES = 'GET_MOVIES';
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const SHOW_MOVIE_START = 'SHOW_MOVIE_START';


export function addMovieFavorite(payload) {
    
    return {
        type: ADD_MOVIE_FAVORITE,
        payload
    }
}

export function getMovies(titulo) {
    
    return function(dispatch) {
        
      return fetch("http://www.omdbapi.com/?apikey=508ad5e2&s=" + titulo)
        .then(response => response.json())
        .then(json => {
           
          dispatch({ type: GET_MOVIES, payload: json });
        });
    };
}

export function getMovieDetail(idMovie) {
        
    return function(dispatch) {
        
      return fetch("http://www.omdbapi.com/?apikey=508ad5e2&i=" + idMovie)
        .then(response => response.json())
        .then(json => {
        dispatch({ type: GET_MOVIE_DETAIL, payload: json });
      });
    };
}

export function removeMovieFavorite(id) {
    return {
        type: REMOVE_MOVIE_FAVORITE,
        payload: id
    }
}

export function mostrarPelisInicio() {
  
  let movies = ['war', 'romance', 'shark', 'spider man']
  return function(dispatch) {
    movies.map(async(elem) => {

      return fetch("http://www.omdbapi.com/?apikey=508ad5e2&s=" + elem)
        .then(response => response.json())
        .then(json => {
           
        dispatch({ type: SHOW_MOVIE_START, payload: json });
      });
    })
  };
}