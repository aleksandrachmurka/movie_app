import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import styles from './BookingForm.module.scss';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import {api} from '../../config';
import ShowTimes from '../ShowTimes';
import Places from '../Places';
import ButtonBuy from '../ButtonBuy';

class BookingForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			isSendingData: false,
			error: false,
			booked: false,
			bookedTime: null,
			bookedSeat: null,
		}
	}

	addBooking = async (data) => {
		this.setState({isSendingData: true});
		try {
			await axios.post(`${api.url}/bookings`, data);
			this.setState({isSendingData: false, booked: true});
		} catch (error) {
			this.setState({isSendingData: false});
		}
	}

	selectTime = (event) => {
		this.setState({bookedTime: event.target.value});
	}

	selectSeat = (event) => {
		this.setState({bookedSeat: parseInt(event.target.value)});
	}

	handleBooking = (event) => {
		event.preventDefault();
		const {bookedTime, bookedSeat}= this.state;
		const {params} = this.props;

		if (isEmpty(bookedTime) || bookedSeat===null ) {
			this.setState({error: true});
			return;
		}

		const data = {
			movieId: params.id,
			reservedSetas: bookedSeat,
			reservedTime: bookedTime,
			userId: 3,
		}

		this.addBooking(data);
	}


	render() {
		const {shows, seats} = this.props;

		if (this.state.booked) {
	    	return <Redirect to="/bookings/3"/>
	    }

		return(
			<div>
				<div className={styles.container}>
					<ShowTimes shows={shows} bookedTime={this.state.bookedTime} onChange={this.selectTime} />
					<Places seats={seats} onChange={this.selectSeat} />
					<ButtonBuy onClick={this.handleBooking} disabled={this.isSendingData}/>
				</div>
				{this.state.error && <div className={styles.alert}>Nie wybrano ilości miejsc lub godziny seansu</div>}
			</div>
		)
	}
}


export default BookingForm;
