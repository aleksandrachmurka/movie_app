import React from 'react';
import styles from './ButtonBuy.module.scss';

const Button = ({onClick}) => (
	<button className={styles.button} onClick={onClick}>
		Kup bilet
	</button>
);


export default Button;