import React, {Component} from 'react';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import Loader from 'react-loader';
import {api} from '../../config';
import Movie from '../Movie';

class MoviesList extends Component {
  state = {
    movies: [],
    loading: false,
  }

  componentDidMount(){
    this.fetchMovies();
  }

  fetchMovies = async () => {
    this.setState({loading: true});
    try {
      const response = await axios.get(`${api.url}/movies`);
      this.setState({loading: false, movies: response.data});
    } catch (error) {
      this.setState({loading: false});
    }

  }

  render() {
    const {movies} = this.state;

    if (isEmpty(movies)) {
      return <Loader />;
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

export default MoviesList;