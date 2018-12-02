const initialState = {
	movie: {},
	loading: false,
	error: false,
}

const movieListReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_MOVIE_STARTED':
			return {...state, loading: true};
		case 'FETCH_MOVIE_SUCESS':
			return {...state, movie: action.movie, loading: false};
		case 'FETCH_MOVIE_REJECTED':
			return {...state, error: true, loading: false};
		default:
			return state;
	}
}

export default movieListReducer;
