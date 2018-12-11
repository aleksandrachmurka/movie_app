import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import styles from './Favorite.module.scss';
import RunningTime from '../RunningTime';
import Rating from '../spare_components/Rating';

const Favorite = ({id, title, image, releaseDate, duration, description}) => {
	return (
		<div className={styles.container}>
			< Rating id={id} />
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

export default Favorite;