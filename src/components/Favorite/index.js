import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { voteFavoriteUp, voteFavoriteDown } from '../../actions/favorite.js';
import styles from './Favorite.module.scss';
import RunningTime from '../RunningTime';

const Favorite = ({id, title, image, releaseDate, duration, description, availableSeats, votes, voteUp, voteDown}) => {
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
				<button onClick={voteUp}>{votes}</button>
				<button onClick={voteDown}>{votes}</button>
			</div>
		</div>
	)
}

Favorite.defaultProps = {
	title: 'Bez tytułu',
	image: 'Brak obrazka',
	releaseDate: 'Brak daty',
	description: 'Brak opisu',
};

Favorite.proptypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	releaseDate: PropTypes.number,
	description: PropTypes.string,
}

const mapStateToProps = store => ({
	votes: store.favorites.votes,
});

export default connect(mapStateToProps, { voteUp: voteFavoriteUp, voteDown: voteFavoriteDown })(Favorite);