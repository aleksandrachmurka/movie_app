import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { voteUp, voteDown }from '../../actions/favorites.js';
import styles from './Favorite.module.scss';
import RunningTime from '../RunningTime';

const Movie = ({id, title, image, releaseDate, duration, description, availableSeats, votes, votePlus, voteMinus}) => {
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
				<button onClick={votePlus}>{votes}</button>
				<button onClick={voteMinus}>{votes}</button>
			</div>
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
	votes: store.favorites.votes,
});

export default connect(mapStateToProps, { votePlus: voteUp, voteMinus: voteDown  })(Favorite);