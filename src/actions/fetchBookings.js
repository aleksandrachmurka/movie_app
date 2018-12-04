import axios from 'axios';
import {api} from '../config';

const fetchBookingsStarted = () =>{
	return {
		type: 'FETCH_BOOKINGS_STARTED',
	}
}

const fetchBookingsSuccess = (bookedMovies) => {
	return {
		type: 'FETCH_BOOKINGS_SUCCESS',
		bookedMovies: bookedMovies,
	}
}

const fetchBookingsRejected = (error) => {
	return {
		type: 'FETCH_BOOKINGS_REJECTED',
		error: error,
	}
}

export const fetchBookings = (id) => (dispatch, getState) => {
	dispatch(fetchBookingsStarted());
	axios.get(`${api.url}/mybookings/${id}`)
	.then((response) => {
		dispatch({ type: 'FETCH_BOOKINGS_SUCCESS', bookedMovies: response.data});
	}).catch((error) => {
		dispatch({ type: 'FETCH_BOOKINGS_REJECTED', error: error})
	})
}