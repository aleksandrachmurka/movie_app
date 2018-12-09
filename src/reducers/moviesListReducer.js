const initialState = {
	movies: [],
	loading: false,
	error: false,
}

const moviesListReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_MOVIES_STARTED':
			return {...state, loading: true};
		case 'FETCH_MOVIES_SUCCESS':
			return {...state, movies: action.movies, loading: false};
		case 'FETCH_MOVIES_REJECTED':
			return {...state, error: true, loading: false};
		default:
			return state;
	}
}

export default moviesListReducer;
