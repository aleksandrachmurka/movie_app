const initialState = {
	favorites: [],
	favorite: false,
}

const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TO_FAVORITES':
			return { favorites: [...state.favorites, action.title], favorite: true};
		case 'REMOVE_FROM_FAVORITES':
			return { favorites: [...state.favorites.filter(movie => movie !== action.title)], favorite: false};
		default:
			return state;
	}
}

export default favoritesReducer;