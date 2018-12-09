import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import Favorite from '../Favorite';

class FavoritesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {favorites, movies, loading, error} = this.props;
    let favs = movies.filter( movie => favorites.includes(movie['_id']));

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <p>Sorry, we could not load your favorite movies</p>
    }

    if (isEmpty(favorites)) {
      return <p>No favorite movies to show</p>
    }

    return(
        favs.map(fav =>
            (
              <Favorite
                key={fav['_id']}
                id={fav['_id']}
                {...fav}
              />
        ))
    )
  }
}

const mapStateToProps = store => ({
  loading: store.favorites.loading,
  movies: store.movies.movies,
  favorites: store.favorites.favorites,
  error: store.favorites.error,
});

export default connect(mapStateToProps)(FavoritesList);