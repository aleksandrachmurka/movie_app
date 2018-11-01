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
	constructor(rating) {
		super(rating);
		this.state = {
			value: rating,
		}
	}

	handleClick = (rate) => {
		//when the same star was clicked second time
		if(rate == this.state.value) {
			this.setState({value: 0});
			return;
		}
		this.setState({value: rate});
	}

	// handleMouseEnter = (rate) => {
	// 	this.setState({value: rate});
	// }

	// handleMouseLeave = (previousRate) => {
	// 	this.setState({value: previousRate});
	// }


	render(){
		return(
			<div>
				{
					Object.keys(ratingDesc).map(starKey=> (
							<FontAwesomeIcon icon={faStar} id={starKey}
							className={ starKey <=this.state.value ? styles.starFill : styles.star}
							onClick={()=>this.handleClick(starKey)}
							// onMouseEnter={()=> this.handleMouseEnter(starKey)}
							// onMouseLeave={()=>this.handleMouseLeave(previousRate)}
							/>
					))
				}
				<span> {this.state.value!==0 ? ratingDesc[this.state.value] : 'Brak oceny'}</span>
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
