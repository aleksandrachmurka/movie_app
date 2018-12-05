import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import Loader from 'react-loader';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/fetchMovie.js';
import styles from './MovieDetails.module.scss';
import RunningTime from '../RunningTime';
import BookingForm from '../BookingForm';


class MovieDetails extends Component {
  constructor(props) {
    super(props);
  }

	componentDidMount(){
		this.props.fetchSingleMovie(this.props.match.params.id);
	}

	render() {
		const {movie} = this.props;

		if (isEmpty(movie)) {
	      return <Loader />;
	    }

		return (
			<div className={styles.container}>
				<div styles={styles.movieDetails}>
					<div className={styles.backgroundImage} style={{backgroundImage: `url(${movie.image})`}} />
					<div className={styles.text}>
						<h3>
							{movie.title}
						</h3>
						<h5>Premiera: {formatDate(movie.releaseDate)}</h5>
						<RunningTime  duration={movie.duration}/>
						<p> {movie.description} </p>
					</div>
				</div>
				<BookingForm params={this.props.match.params} shows={movie.availableTimes} seats={movie.seats} />
				<NavLink to='/movies'>
	        		<button className={styles.button}>Powrót</button>
	      		</NavLink>
			</div>
		)
	}
}

MovieDetails.defaultProps = {
	title: 'Bez tytułu',
	image: 'Brak obrazka',
	releaseDate: 'Brak daty',
	description: 'Brak opisu',
};

MovieDetails.proptypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	releaseDate: PropTypes.number,
	description: PropTypes.string,
}

const mapStateToProps = store => ({
	movie: store.movie.movie,
	loading: store.movie.loading,
	error: store.movie.error,
});

export default connect(mapStateToProps, { fetchSingleMovie: fetchMovie })(MovieDetails);