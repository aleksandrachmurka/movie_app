import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import styles from './BookingForm.module.scss';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { addBooking } from '../../actions/addBooking.js';
import ShowTimes from '../ShowTimes';
import Places from '../Places';
import ButtonBuy from '../ButtonBuy';

class BookingForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			warning: false,
			bookedTime: null,
			bookedSeat: null,
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

		if (isEmpty(bookedTime) || bookedSeat===null ) {
			this.setState({warning: true});
			return;
		}

		const data = {
			movieId: this.props.params.id,
			reservedSetas: bookedSeat,
			reservedTime: bookedTime,
			userId: 3,
		}

		this.props.addBook(data);
	}

	render() {
		const {shows, seats} = this.props;

		if (this.props.booked) {
	    	return <Redirect to="/bookings/3"/>
	    }

		return(
			<div>
				<div className={styles.container}>
					<ShowTimes shows={shows} bookedTime={this.state.bookedTime} onChange={this.selectTime} />
					<Places seats={seats} onChange={this.selectSeat} />
					<ButtonBuy onClick={this.handleBooking} disabled={this.props.isBooking}/>
				</div>
				{this.state.warning && <div className={styles.alert}>Nie wybrano ilości miejsc lub godziny seansu</div>}
			</div>
		)
	}
}

const mapStateToProps = store => ({
  booked: store.booking.booked,
  isBooking: store.booking.isBooking,
  error: store.booking.error,
});

export default connect(mapStateToProps, { addBook: addBooking })(BookingForm);