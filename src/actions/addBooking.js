import axios from 'axios';
import {api} from '../config';
import { fetchBookings } from './fetchBookings.js';

const addBookingStarted = () => {
	return {
		type:'ADD_BOOKING_STARTED',
	}
}

const addBookingSuccess = (data) => {
	return {
		type:'ADD_BOOKING_SUCCESS',
		data: data,
	}
}

const addBookingRejected = (error) => {
	return {
		type:'ADD_BOOKING_REJECTED',
		error: error,
	}
}

export const addBooking = (data) => (dispatch, getState) => {
	dispatch(addBookingStarted());
	axios.post(`${api.url}/bookings`, data)
	.then((response) => {
		dispatch({ type: 'ADD_BOOKING_SUCCESS', data: data});
		dispatch(fetchBookings(3));
	}).catch((error) => {
		dispatch({ type: 'ADD_BOOKING_REJECTED', error: error})
	})
}