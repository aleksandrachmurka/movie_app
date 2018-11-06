import MoviesList from '../components/MoviesList';
import MovieDetails from '../components/MovieDetails';
import BookingsList from '../components/BookingsList';

export default {
	routes: [
		{
			id: 1,
			path: '/movies',
			component: MoviesList,
			// exact true - bieże path dosłownie
			exact: true,
		},
		{
			id: 2,
			path: '/movie/:id',
			component: MovieDetails,
			exact: true,
		},
		{
			id: 3,
			path: '/bookings/:userId',
			component: BookingsList,
			exact: true,
		}

	],

	redirect: [
		{
			id: 1,
			from: '/',
			to: '/movies',
		},
		{
			id: 2,
			from: 'redirect',
			to: '/movies',
		}
	]
}