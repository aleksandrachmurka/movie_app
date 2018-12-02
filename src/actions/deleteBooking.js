import axios from 'axios';
import {api} from '../config';
import { fetchBookings } from './fetchBookings.js';

const deleteBookingStarted = () => {
	return {
		type:'DELETE_BOOKING_STARTED',
	}
}

const deleteBookingSucess = (id) => {
	return {
		type:'DELETE_BOOKING_SUCESS',
		id: id,
	}
}

const deleteBookingRejected = (error) => {
	return {
		type:'DELETE_BOOKING_REJECTED',
		error: error,
	}
}

export const deleteBooking = (id) => (dispatch, getState) => {
	dispatch(deleteBookingStarted());
	axios.delete(`${api.url}/bookings/${id}`)
	.then((response) => {
		dispatch({ type: 'DELETE_BOOKING_SUCESS', id: id});
		// dispatch(fetchBookings(id));
	}).catch((error) => {
		dispatch({ type: 'DELETE_BOOKING_REJECTED', error: error})
	})
}
