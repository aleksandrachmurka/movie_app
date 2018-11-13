import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import Loader from 'react-loader';
import formatDate from '../../utils/formatDate';
import formatTime from '../../utils/formatTime';
import {api} from '../../config';
import styles from './MovieDetails.module.scss';
import RunningTime from '../RunningTime';
import BookingForm from '../BookingForm';


class MovieDetails extends Component {
	state = {
		movie: {},
		loading: false,
	}

	componentDidMount(){
		this.fetchMovie();
	}

	fetchMovie = async () => {
		const {params} = this.props.match;
		this.setState({loading: true});
		try {
			const response = await axios.get(`${api.url}/movies/${params.id}`);
      this.setState({loading: false, movie: response.data});
		} catch (error) {
			this.setState({loading: false});
		}
	}

	render() {
		const {movie} = this.state;

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

export default MovieDetails;