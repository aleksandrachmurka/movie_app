import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import { fetchBookings } from '../../actions/fetchBookings.js';
import { deleteBooking } from '../../actions/deleteBooking.js';
import BookedMovie from '../BookedMovie';

class BookingsList extends Component  {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchBook(this.props.match.params.id);
  }

  render() {
    const {bookedMovies, loading, deleting, error} = this.props;

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <p>Sorry, we could not load your bookings</p>
    }

    if (isEmpty(bookedMovies)) {
      return <p>No bookings to show</p>
    }

    return (
      <div>
        {
          bookedMovies[0].map(bookedMovie =>
          (<BookedMovie
              key={bookedMovie.key}
              id={bookedMovie.id}
              title={bookedMovie.title}
              releaseDate={bookedMovie.releaseDate}
              description={bookedMovie.description}
              duration={bookedMovie.duration}
              image={bookedMovie.image}
              bookedTime={bookedMovie.reservedTime}
              bookedSeat={bookedMovie.reservedSetas}
              deleteBooking={()=> this.props.deleteBook(bookedMovie.bookingId)}
             />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = store => ({
  bookedMovies: store.bookings.bookings,
  loading: store.bookings.loading,
  deleting: store.bookings.deleting,
  error: store.bookings.error,
});

export default connect(mapStateToProps, { fetchBook: fetchBookings, deleteBook: deleteBooking })(BookingsList);
