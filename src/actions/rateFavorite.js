export const rateFavorite = (id, rate) => {
	return {
		type: 'RATE_FAVORITE',
		id: id,
		rate: rate,
	}
}