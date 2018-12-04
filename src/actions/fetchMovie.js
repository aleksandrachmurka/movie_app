import axios from 'axios';
import {api} from '../config';

const fetchMovieStarted = () =>{
	return {
		type: 'FETCH_MOVIE_STARTED',
	}
}

const fetchMovieSuccess = (movie) => {
	return {
		type: 'FETCH_MOVIE_SUCCESS',
		movie: movie,
	}
}

const fetchMovieRejected = (error) => {
	return {
		type: 'FETCH_MOVIE_REJECTED',
		error: error,
	}
}

export const fetchMovie = (id) => (dispatch, getState) => {
	dispatch(fetchMovieStarted());
	axios.get(`${api.url}/movies/${id}`)
	.then((response) => {
		dispatch({ type: 'FETCH_MOVIE_SUCCESS', movie: response.data});
	}).catch((error) => {
		dispatch({ type: 'FETCH_MOVIE_REJECTED', error: error})
	})
}