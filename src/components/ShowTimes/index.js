import React, {Component} from 'react';
import styles from './ShowTimes.module.scss';

const ShowTimes = ({pickedShow, shows, onClick}) => (
	<div className={styles.container}>
				<h4>Godzina seansu</h4>
				{shows.map(show => (
					<div
						id={show.id}
						key={show.id}
						className={pickedShow === show.id ? styles.showPicked : styles.show}
						onClick={()=> onClick(show.id)}
					>
						{show.time}
					</div>
				))}
	</div>
)

export default ShowTimes;