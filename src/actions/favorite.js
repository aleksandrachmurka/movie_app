export const voteFavoriteUp = (id) => {
	return {
		type: 'VOTE_FAVORITE_UP',
		id: id,
	}
}

export const voteFavoriteDown = (id) => {
	return {
		type: 'VOTE_FAVORITE_DOWN',
		id: id,
	}
}
