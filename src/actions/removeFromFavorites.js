export const removeFromFavorites = (id) => {
	return {
		type: 'REMOVE_FROM_FAVORITES',
		id: id,
	}
}