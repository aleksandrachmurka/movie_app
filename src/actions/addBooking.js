import axios from 'axios';
import {api} from '../config';

const addBookingStarted = () => {
	return {
		type:'ADD_BOOKING_STARTED',
	}
}

const addBookingSucess = (data) => {
	return {
		type:'ADD_BOOKING_SUCESS',
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
		dispatch({ type: 'ADD_BOOKING_SUCESS', data: data});
	}).catch((error) => {
		dispatch({ type: 'ADD_BOOKING_REJECTED', error: error})
	})
}