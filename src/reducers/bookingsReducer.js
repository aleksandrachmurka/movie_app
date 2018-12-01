const initialState = {
	bookings: [],
	loading: true,
	deleting: false,
	error: '',
}

const bookingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_BOOKINGS_STARTED':
			return {...state, loading: true};
		case 'FETCH_BOOKINGS_SUCESS':
			return { ...state, bookings: [...state.bookings, action.bookedMovies], loading: false};
		case 'FETCH_BOOKINGS_REJECTED':
			return { ...state, error: 'Error', loading: false};
		case 'DELETE_BOOKINGS_STARTED':
			return {...state, deleting: true};
		case 'DELETE_BOOKINGS_SUCESS':
			return {...state, bookings: [...state.bookings.filter(booking => booking.id !== action.id)], deleting: false};
		case 'DELETE_BOOKINGS_REJECTED':
			return {...state, error: 'Error', deleting: false};
		default:
			return state;
	}
}

export default bookingsReducer;