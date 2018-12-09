const initialState = {
	votes: 0,
}

const favoriteReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'VOTE_FAVORITE_UP':
			return { ...state, votes: state.votes + 1};
		case 'VOTE_FAVORITE_DOWN':
			return { ...state, votes: state.votes - 1};
		default:
			return state;
	}
}

export default favoriteReducer;