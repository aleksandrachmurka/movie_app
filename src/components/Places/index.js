import React from 'react';
import styles from './Places.module.scss';


const Places = ({places, onChange}) => (
	<div className={styles.container}>
		<label htmlFor="places">Ilość miejsc</label>
		<input id="places" type="number" value={places} onChange={onChange}/>
	</div>

)

export default Places;
