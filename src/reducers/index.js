import { ADD_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAIL, REMOVE_MOVIE_FAVORITE, SHOW_MOVIE_START } from '../actions';

const initialState = {
    movieFavorites: [],
    moviesLoaded: [],
    movieDetail: {},
    showMovies: []
};
    
function rootReducer(state = initialState, action) {

   
    switch (action.type) {
        case ADD_MOVIE_FAVORITE :
            
            return {
                ...state,
                movieFavorites: state.movieFavorites.concat(action.payload)
            }
        case GET_MOVIES:
            return {
                ...state,
                moviesLoaded: action.payload.Search
            }
        case GET_MOVIE_DETAIL: 
            
            return {
                ...state,
                movieDetail:  action.payload
            }
           
        case REMOVE_MOVIE_FAVORITE:
            return {
                ...state,
                movieFavorites: state.movieFavorites.filter((p) => p.id !== action.payload)
            }
            
        case SHOW_MOVIE_START:
            return {
                ...state,
                showMovies:  [...state.showMovies,  ...action.payload.Search]
            }
        default: return state
    }

    
}


export default rootReducer;