import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => (
	<ul className={styles.navigation}>
		<li>
			<NavLink to="/movies" className={styles.navElement}>Movies</NavLink>
		</li>
		<li>
			<NavLink to="/bookings/1" className={styles.navElement}>My bookings</NavLink>
		</li>
		<li>
			<NavLink to="/redirect" className={styles.navElement}>Coming Soon</NavLink>
		</li>
	</ul>

);

export default Navigation;