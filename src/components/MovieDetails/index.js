import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieDetails.module.scss';
import RunningTime from '../RunningTime';
import Booking from '../Booking';


const MovieDetails = ({id, title, image, releaseDate, duration, description}) => {
	return (
		<div className={styles.container}>
			<div styles={styles.movieDetails}>
				<div className={styles.backgroundImage} style={{backgroundImage: `url(${image})`}} />
				<div className={styles.text}>
					<h3>
						{title}
					</h3>
					<h5>Premiera: {releaseDate}</h5>
					<RunningTime  duration={duration}/>
					<p> {description} </p>
				</div>
			</div>
			<Booking />
			<NavLink to='/movies'>
            	<button className={styles.button}>Powrót</button>
        	</NavLink>
		</div>
	)
}

MovieDetails.defaultProps = {
	title: 'Bez tytułu',
	image: 'Brak obrazka',
	releaseDate: 'Brak daty',
	description: 'Brak opisu',
};

MovieDetails.proptypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	releaseDate: PropTypes.number,
	description: PropTypes.string,
}

export default MovieDetails;