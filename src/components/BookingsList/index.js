import React, {Component} from 'react';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import Loader from 'react-loader';
import {api} from '../../config';
import BookedMovie from '../BookedMovie';

class BookingsList extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      bookedMovies: [],
      loading: true,
      deleting: false,
    };
  }

  componentDidMount(){
    this.fetchBookings();
  }

  fetchBookings = async () => {
    const {params} = this.props.match;
    this.setState({loading: true});
    try {
      const response = await axios.get(`${api.url}/mybookings/${params.id}`);
      this.setState({loading: false, bookedMovies: response.data});
    } catch (error) {
      this.setState({loading: false});
    }
  }

  deleteBooking = async (id) => {
    this.setState({deleting: true});
    try {
      await axios.delete(`${api.url}/bookings/${id}`);
      this.setState({deleting: false});
      this.fetchBookings();
    } catch (error) {
      this.setState({deleting: false});
    }
  }

  render() {
    const {bookedMovies, deleting} = this.state;

    if (isEmpty(bookedMovies)) {
      return <Loader />;
    }

    return (
      <div>
        {
          bookedMovies.map(bookedMovie =>
          (<BookedMovie
              id={bookedMovie.id}
              title={bookedMovie.title}
              releaseDate={bookedMovie.releaseDate}
              description={bookedMovie.description}
              duration={bookedMovie.duration}
              image={bookedMovie.image}
              bookedTime={bookedMovie.reservedTime}
              bookedSeat={bookedMovie.reservedSetas}
              deleteBooking={()=>this.deleteBooking(bookedMovie.bookingId)}
             />
          ))
        }
      </div>
    )
  }
}

export default BookingsList;