const initialState = {
	favorites: [],
}

const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TO_FAVORITES':
			return { favorites: [...state.favorites, action.title]};
		case 'REMOVE_FROM_FAVORITES':
			return { favorites: [...state.favorites.filter(movie => movie !== action.title)]};
		default:
			return state;
	}
}

export default favoritesReducer;