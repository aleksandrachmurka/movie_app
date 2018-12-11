const initialState = {
	ratings: [],
}

const ratingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'RATE_FAVORITE':
			return { ratings: [...state.ratings, {id: action.id, rate: action.rate}]};
		default:
			return state;
	}
}

export default ratingsReducer;
