import axios from 'axios';
import {api} from '../config';

const fetchBookingsStarted = () =>{
	return {
		type: 'FETCH_BOOKINGS_STARTED',
	}
}

const fetchBookingsSucess = (bookedMovies) => {
	return {
		type: 'FETCH_BOOKINGS_SUCESS',
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
		dispatch({ type: 'FETCH_BOOKINGS_SUCESS', bookedMovies: response.data});
	}).catch((error) => {
		dispatch({ type: 'FETCH_BOOKINGS_REJECTED', error: error})
	})
}