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

  // fetchMovies = async () => {
  //   this.setState({loading: true});
  //   try {
  //     const response = await axios.get(`${api.url}/movies`);
  //     this.setState({loading: false, movies: response.data});
  //   } catch (error) {
  //     this.setState({loading: false});
  //   }

  // }

  render() {
    const {movies} = this.props;

    if (isEmpty(movies)) {
      return <Loader />;
    }

    console.log(this.props.favorites)

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
});

export default connect(mapStateToProps,  { fetchMoviesList: fetchMovies})(MoviesList);

