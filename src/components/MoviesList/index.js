import React, {Component} from 'react';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import Loader from 'react-loader';
import {api} from '../../config';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/fetchMovies.js';
import Movie from '../Movie';

class MoviesList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchMoviesList();
  }

  render() {
    const {movies} = this.props;

    if (isEmpty(movies)) {
      return <Loader />;
    }

    if (this.props.error === true) {
      return <p>Sorry, we could not load movies</p>
    }

    return(

        movies.map(movie =>
            (
              <Movie
                id={movie['_id']}
                {...movie}
              />
        ))
    )
  }
}

const mapStateToProps = store => ({
  favorites: store.addToFavorites.favorites,
  loading: store.movies.loading,
  movies: store.movies.movies,
  error: store.movies.error,
});

export default connect(mapStateToProps,  { fetchMoviesList: fetchMovies})(MoviesList);