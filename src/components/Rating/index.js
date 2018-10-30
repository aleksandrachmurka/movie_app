import React, {Component} from 'react';
import styles from './Rating.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ratingDesc = {
	'1': 'Dno',
	'2': 'Ujdzie',
	'3': 'Zjadliwy',
	'4': 'Dobry',
	'5': 'Arcydzieło!',
};

class Rating extends Component {
	constructor({rating}) {
		super({rating});
		this.state = {
			value: rating,
		};
	}

	handleChange = (event) => {
		document.querySelectorAll('input[checkbox]').checked = false;
		const rate = event.target.value;
		this.setState({value: rate});
	}

	render(){
		return(
			<div>
				{
					Object.keys(ratingDesc).map(starKey=> (
					<div className={styles.star}>
						<input type="checkbox" id={starKey} value={starKey} onChange={this.handleChange} onMouseEnter={this.handleChange}
							checked={starKey <= this.state.value ? true: false}/>
						<label htmlFor={starKey}>
							<FontAwesomeIcon icon={faStar} />
						</label>
					</div>
					))
				}
				<span> {ratingDesc[this.state.value]}</span>
			</div>
		)
	};
}

export default Rating;

Rating.defaultProps = {
	rating: 0,
};

Rating.proptypes = {
	rating: PropTypes.number,
};
