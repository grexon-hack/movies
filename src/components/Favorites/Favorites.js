import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from '../../actions'
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
   
    return (
      <div className="favoritos">
        <h1>Películas Favoritas</h1>
        <ul>
          {
            this.props.movie.map((fav) => {
              return (
                <div className="lista-fav">
                  <img src={fav.img} alt='mi pelicula favorita'/>
                    <li>
                      <Link to={`/movie/${fav.id}`}>
                        {fav.title}
                      </Link>
                      </li>
                  <button style={{cursor:'pointer'}} onClick={() => this.props.removeMovieFavorite(fav.id)}>Eliminar</button>
                </div>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    movie : state.movieFavorites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite : id =>  dispatch(removeMovieFavorite(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList)


