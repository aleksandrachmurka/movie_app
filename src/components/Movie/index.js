import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import formatTime from '../../utils/formatTime';
import styles from './Movie.module.scss';
import RunningTime from '../RunningTime';

const Movie = ({id, title, image, releaseDate, duration, description, availableSeats}) => {
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
			</div>
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

export default Movie;