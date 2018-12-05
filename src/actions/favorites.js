export const addToFavorites = (title) => {
	return {
		type: 'ADD_TO_FAVORITES',
		title: title,
	}
}

export const removeFromFavorites = (title) => {
	return {
		type: 'REMOVE_FROM_FAVORITES',
		title: title,
	}
}
