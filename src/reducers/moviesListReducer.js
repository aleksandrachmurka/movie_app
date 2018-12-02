const initialState = {
	movies: [],
	loading: false,
	error: false,
	counter: 55,
}

const moviesListReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREASE_COUNTER':
			return {...state, counter: state.counter + 1};
		case 'FETCH_MOVIES_STARTED':
			return {...state, loading: true};
		case 'FETCH_MOVIES_SUCESS':
			return {...state, movies: action.movies, loading: false};
		case 'FETCH_MOVIES_REJECTED':
			return {...state, error: true, loading: false};
		default:
			return state;
	}
}

export default moviesListReducer;
