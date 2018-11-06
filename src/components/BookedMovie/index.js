import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookedMovie.module.scss';
import Rating from '../Rating';
import RunningTime from '../RunningTime';
import deleteIcon from '../../images/rubbish-bin.svg';


const BookedMovie = ({id, title, image, releaseDate, duration, description, rating, deleteBooking}) => {
	return (
		<div className={styles.container}>
			<Rating rating={rating}/>
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
			<img className={styles.icon} src={deleteIcon} onClick={()=> deleteBooking(id)} />
		</div>
	)
}

BookedMovie.defaultProps = {
	title: 'Bez tytułu',
	image: 'Brak obrazka',
	releaseDate: 'Brak daty',
	description: 'Brak opisu',
};

BookedMovie.proptypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	releaseDate: PropTypes.number,
	description: PropTypes.string,
}

export default BookedMovie;