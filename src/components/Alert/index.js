import React from 'react';
import PropTypes from 'prop-types';
import styles from './Alert.module.scss';

const iconType ={
	success: 'check-circle',
	error: 'exclamation-circle',
	warning: 'exclamation-triangle',
};

const Alert = ({alert}) => {
	return(
		<div className={`${styles.box} ${styles[alert.type]}`}>
			<img src={require(`../../images/${iconType[alert.type]}.svg`)} className={styles.icon} />
			<span> {alert.message} </span>
		</div>
	)
}

export default Alert;

Alert.proptypes= {
	alert: PropTypes.shape({
		message: PropTypes.string,
		type: PropTypes.string,
	})
}