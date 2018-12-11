import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import moviesListReducer from './reducers/moviesListReducer.js';
import movieReducer from './reducers/movieReducer.js';
import bookingsListReducer from './reducers/bookingsListReducer.js';
import bookingReducer from './reducers/bookingReducer.js';
import favortiesListReducer from './reducers/favoritesListReducer.js';
import App from './App';
import './index.scss';

const reducers = combineReducers({
	movies: moviesListReducer,
	movie: movieReducer,
	bookings: bookingsListReducer,
	booking: bookingReducer,
	favorites: favortiesListReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

const app = (
	<Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));