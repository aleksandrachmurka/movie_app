import React from 'react';
import PropTypes from 'prop-types';
import styles from './RunningTime.module.scss';
import iconTimes from '../../images/time_icon.svg';

const RunningTime = ({duration}) => (
	<div className={styles.time}>
		<img src={iconTimes} alt='clock icon'/>
		<span>
			Czas trwania: {duration} min
		</span>
	</div>
)

RunningTime.proptypes = {
	duration: PropTypes.number
}

export default RunningTime;