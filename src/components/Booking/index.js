import React, {Component} from 'react';
import styles from './Booking.module.scss';
import ShowTimes from '../ShowTimes';
import Places from '../Places';
import ButtonBuy from '../ButtonBuy';

class Booking extends Component {
	state = {
		shows: [
			{id: 0, time: '16:00'},
			{id: 1, time: '18:00'},
			{id: 2, time: '20:00'},
		],
		pickedShow: '',
		places: '',
	}

	onChange =(event) => {
		this.setState({places: event.target.value});
	}

	onClick = (id) => {
		this.setState({pickedShow: id});
	}

	showBooking = () => {
		if(!this.state.pickedShow || !this.state.places) {
			alert('Należy wybrać godzinę seansu oraz ilość miejsc');
			return;
		}

		const booking = `Wybrano ${this.state.places} miejsc na seans o godzinie ${this.state.shows[this.state.pickedShow].time}`
		alert(booking)
	}

	render() {
		return(
			<div className={styles.container}>
				<ShowTimes pickedShow={this.state.pickedShow} shows={this.state.shows} onClick={this.onClick} />
				<Places places={this.state.places} onChange={this.onChange} />
				<ButtonBuy onClick={this.showBooking} />
			</div>
		)
	}
}


export default Booking;