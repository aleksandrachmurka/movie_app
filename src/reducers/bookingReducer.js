const initialState = {
	booked: false,
	isBooking: false,
	error: false,
}

const bookingReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_BOOKING_STARTED':
			return {...state, isBooking: true};
		case 'ADD_BOOKING_SUCCESS':
			return { ...state, booked: true, isBooking: false};
		case 'ADD_BOOKING_REJECTED':
			return { ...state, error: true, isBooking: false};
		default:
			return state;
	}
}

export default bookingReducer;