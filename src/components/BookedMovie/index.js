import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import formatTime from '../../utils/formatTime';
import styles from './BookedMovie.module.scss';
import RunningTime from '../RunningTime';
import deleteIcon from '../../images/rubbish-bin.svg';

const BookedMovie = ({id, title, releaseDate, duration, description, image, bookedTime, bookedSeat, deleteBooking}) => {
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
			<div className={styles.booking}>
				<p>Godzina seansu: {formatTime(bookedTime)}</p>
				<p>Ilość miejsc: {bookedSeat}</p>
				<img className={styles.icon} src={deleteIcon} alt={`delete icon`} onClick={()=> deleteBooking(id)} />
			</div>
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