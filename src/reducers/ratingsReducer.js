const initialState = {
	ratings: [],
}

const ratingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'RATE_FAVORITE':
			const alreadyRated = state.ratings.filter(rating => rating.id === action.id);
			if (alreadyRated.length !== 0) {
				const index = state.ratings.indexOf(alreadyRated[0]);
				return { ratings: [
							...state.ratings,
							{
								id: state.ratings[index].id,
								total: parseInt(state.ratings[index].total) + parseInt(action.rate),
								votes: state.ratings[index].votes +1,
								// rate: total / votes,
							}
						]};
			}
			else {
				return { ratings: [...state.ratings, {id: action.id, total: action.rate, votes: 1, rate: action.rate}]};
			}
		default:
			return state;
	}
}

export default ratingsReducer;
