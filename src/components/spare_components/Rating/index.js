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
	constructor(props) {
		super(props);
		this.state = {
			value: props.rating,
			temporaryValue: null,
		}
	}

	handleClick = (rate) => {
		//when the same star was clicked second time
		if(rate === this.state.value) {
			this.setState({value: 0});
			return;
		}
		this.setState({value: rate});
	}

	handleMouseEnter = (rate) => {
		this.setState({temporaryValue: rate});
	}

	handleMouseLeave = () => {
		this.setState({temporaryValue: null});
	}


	render(){
		return(
			<div className={styles.container}>
				{
					Object.keys(ratingDesc).map(starKey=> (
							<FontAwesomeIcon data-test="star" icon={faStar} id={starKey}
							className={
								this.state.temporaryValue !== null ?
								(starKey <= this.state.temporaryValue ? styles.starFill : styles.star)
								:
								(starKey <= this.state.value ? styles.starFill : styles.star)

							}
							onClick={()=>this.handleClick(starKey)}
							onMouseEnter={()=> this.handleMouseEnter(starKey)}
							onMouseLeave={()=>this.handleMouseLeave()}
							/>
					))
				}
				<span data-test="description"> {this.state.value===0 ?  'Brak oceny' : this.state.temporaryValue ? ratingDesc[this.state.temporaryValue]: ratingDesc[this.state.value]}</span>
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
