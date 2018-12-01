import axios from 'axios';
import {api} from '../config';

const fetchMoviesStarted = () =>{
	return {
		type: 'FETCH_MOVIES_STARTED',
	}
}

const fetchMoviesSucess = (movies) => {
	return {
		type: 'FETCH_MOVIES_SUCESS',
		movies: movies,
	}
}

const fetchMoviesRejected = (error) => {
	return {
		type: 'FETCH_MOVIES_REJECTED',
		error: error,
	}
}

export const fetchMovies = () => (dispatch, getState) => {
	dispatch(fetchMoviesStarted());
	axios.get(`${api.url}/movies`)
	.then((response) => {
		dispatch({ type: 'FETCH_MOVIES_SUCESS', movies: response.data});
	}).catch((error) => {
		dispatch({ type: 'FETCH_MOVIES_REJECTED', error: error})
	})
}