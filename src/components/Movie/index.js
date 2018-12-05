import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../actions/favorites.js';
import styles from './Movie.module.scss';
import RunningTime from '../RunningTime';

const Movie = ({id, title, image, releaseDate, duration, description, availableSeats, favorite}) => {
	return (
		<div className={styles.container}>
			<div styles={styles.movieDetails}>
				<div className={styles.backgroundImage} style={{backgroundImage: `url(${image})`}} />
				<div className={styles.text}>
					<h3>
						{title}
					</h3>
					<h5>Premiera: {formatDate(releaseDate)}</h5>
					<RunningTime  duration={duration}/>
					<p> {description} </p>
				</div>
				<button onClick={increaseCounter}>{counter}</button>
			</div>
			{ this.props.favorite === false ?
				<button onClick={()=>this.props.addMovie(movie.title)}>Dodaj do ulubionych</button>
						:
				<button onClick={()=>this.props.removeMovie(movie.title)}>Usuń z ulubionych</button>
			}
			<NavLink to={`/movies/${id}`}>
            	<button className={styles.button}>Oglądam!</button>
        	</NavLink>
		</div>
	)
}

Movie.defaultProps = {
	title: 'Bez tytułu',
	image: 'Brak obrazka',
	releaseDate: 'Brak daty',
	description: 'Brak opisu',
};

Movie.proptypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	releaseDate: PropTypes.number,
	description: PropTypes.string,
}

const mapStateToProps = store => ({
	favorite: store.addToFavorites.favorite,
});

export default connect(mapStateToProps, { addMovie: addToFavorites, removeMovie: removeFromFavorites })(Movie);