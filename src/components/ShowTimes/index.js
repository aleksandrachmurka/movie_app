import React from 'react';
import formatTime from '../../utils/formatTime.js';
import styles from './ShowTimes.module.scss';

const ShowTimes = (props) => (
	<div className={styles.container}>
		<label htmlFor="shows">Godzina seansu</label>
		<select id="shows" value={props.bookedTime} onChange={props.onChange}>
			<option>wybierz</option>
			{props.shows.map(show => (
				<option
					value={show}
					key={show}
				>
					{formatTime(show)}
				</option>
			))}
		</select>
	</div>
)

export default ShowTimes;