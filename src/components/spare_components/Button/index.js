import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';


const Button = ({soldedOut}) => (
	soldedOut ?
	<button className={styles.button}> Kup bilet </button>
		:
	<button className={styles.button} disabled> Niedostępny </button>
);

Button.proptypes = {
	soldedOut: PropTypes.bool.isRequired
}

export default Button;