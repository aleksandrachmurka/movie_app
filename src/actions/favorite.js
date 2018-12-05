export const voteFavoriteUp = (title) => {
	return {
		type: 'VOTE_FAVORITE_UP',
		title: title,
	}
}

export const voteFavoriteDown = (title) => {
	return {
		type: 'VOTE_FAVORITE_DOWN',
		title: title,
	}
}
