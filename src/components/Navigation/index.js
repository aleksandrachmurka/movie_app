import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => (
	<ul className={styles.navigation}>
		<li>
			<NavLink to="/movies" className={styles.navElement} activeClassName={styles.active}>Movies</NavLink>
		</li>
		<li>
			<NavLink to="/bookings/3" className={styles.navElement} activeClassName={styles.active}>My bookings</NavLink>
		</li>
		<li>
			<NavLink to="/redirect" className={styles.navElement} activeClassName={styles.active}>Coming Soon</NavLink>
		</li>
	</ul>

);

export default Navigation;