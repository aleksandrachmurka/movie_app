const initialState = {
	favorites: [],
}

const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TO_FAVORITES':
			return { favorites: [...state.favorites, action.id]};
		case 'REMOVE_FROM_FAVORITES':
			return { favorites: [...state.favorites.filter(movie => movie !== action.id)]};
		default:
			return state;
	}
}

export default favoritesReducer;