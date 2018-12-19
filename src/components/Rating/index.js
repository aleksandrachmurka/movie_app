import React, {Component} from 'react';
import { connect } from 'react-redux';
import { rateFavorite } from '../../actions/rateFavorite.js';
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
			temporaryValue: null,
		}
	}

	handleClick = (rate) => {
		this.props.rate(this.props.id, rate);
	}

	handleMouseEnter = (rate) => {
		this.setState({temporaryValue: rate});
	}

	handleMouseLeave = () => {
		this.setState({temporaryValue: null});
	}

	render(){

		const rating = this.props.ratings.filter(x => x.id == this.props.id);
		let rate = null;
		let votes = null;

		if(rating.length !== 0) {
			rate = Math.round(rating[0].rate);
			votes = rating[0].votes;
		}

		return(
			<div className={styles.container}>
				{
					Object.keys(ratingDesc).map(starKey=> (
							<FontAwesomeIcon data-test="star" icon={faStar} id={starKey}
							className={
								this.state.temporaryValue !== null ?
								(starKey <= this.state.temporaryValue ? styles.starFill : styles.star)
								:
								(starKey <= rate ? styles.starFill : styles.star)

							}
							onClick={()=>this.handleClick(starKey)}
							onMouseEnter={()=> this.handleMouseEnter(starKey)}
							onMouseLeave={()=>this.handleMouseLeave()}
							/>
					))
				}
				<span data-test="description"> { (rating.length === 0 && this.state.temporaryValue === null) ?  'Oceń' : this.state.temporaryValue ? ratingDesc[this.state.temporaryValue]: ratingDesc[rate]}</span>
				<p> {votes===null ? 'Brak głosów' : `Liczba ocen: ${votes}`}</p>
			</div>
		)
	};
}

Rating.defaultProps = {
	rating: 0,
};

Rating.proptypes = {
	rating: PropTypes.number,
};

const mapStateToProps = store => ({
	ratings: store.ratings.ratings,
});

export default connect(mapStateToProps, { rate: rateFavorite})(Rating);
