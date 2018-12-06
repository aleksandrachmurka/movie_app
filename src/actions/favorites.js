export const addToFavorites = (id) => {
	return {
		type: 'ADD_TO_FAVORITES',
		id: id,
	}
}

export const removeFromFavorites = (id) => {
	return {
		type: 'REMOVE_FROM_FAVORITES',
		id: id,
	}
}
