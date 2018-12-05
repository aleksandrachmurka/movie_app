import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty';
import Loader from 'react-loader';
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
                key={movie['_id']}
                id={movie['_id']}
                {...movie}
              />
        ))
    )
  }
}

const mapStateToProps = store => ({
  loading: store.movies.loading,
  movies: store.movies.movies,
  error: store.movies.error,
});

export default connect(mapStateToProps,  { fetchMoviesList: fetchMovies})(MoviesList);