import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import RunningTime from '../RunningTime';
import Button from '../Button';
import Rating from '../Rating';

const Card = ({title, image, releaseDate, description, ...rest}) => {
	return (
		<div className={styles.container}>
			<div className={styles.backgroundImage} style={{backgroundImage: `url(${image})`}} />
			<div className={styles.text}>
				<h3>
					{title}
				</h3>
				<h5>Premiera: {releaseDate}</h5>
				<RunningTime  {...rest}/>
				<p> {description} </p>
				<Rating {...rest} />
				<Button {...rest} />
			</div>
		</div>
	)
}

Card.defaultProps = {
	title: 'Bez tytułu',
	image: 'Brak obrazka',
	releaseDate: 'Brak daty',
	description: 'Brak opisu',
};

Card.proptypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	releaseDate: PropTypes.number,
	description: PropTypes.string,
}

export default Card;