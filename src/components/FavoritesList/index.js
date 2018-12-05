import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import { fetchFavorites } from '../../actions/fetchFavorites.js';
import Favorite from '../Favorite';

class FavoritesList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchFavs();
  }

  render() {
    const {favorites} = this.props;

    if (isEmpty(favorites)) {
      return <Loader />;
    }

    if (this.props.error === true) {
      return <p>Sorry, we could not load your favorite movies</p>
    }

    return(
        favorites.map(favorite =>
            (
              <Favorite
                key={favorite['_id']}
                id={favorite['_id']}
                {...favorite}
              />
        ))
    )
  }
}

const mapStateToProps = store => ({
  loading: store.favorites.loading,
  favorites: store.favorites.favorites,
  error: store.favorites.error,
});

export default connect(mapStateToProps,  { fetchFavoritesList: fetchFavs})(FavoritesList);