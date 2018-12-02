import axios from 'axios';
import {api} from '../config';

const fetchMovieStarted = () =>{
	return {
		type: 'FETCH_MOVIE_STARTED',
	}
}

const fetchMoviesSucess = (movie) => {
	return {
		type: 'FETCH_MOVIES_SUCESS',
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
		dispatch({ type: 'FETCH_MOVIE_SUCESS', movie: response.data});
	}).catch((error) => {
		dispatch({ type: 'FETCH_MOVIE_REJECTED', error: error})
	})
}