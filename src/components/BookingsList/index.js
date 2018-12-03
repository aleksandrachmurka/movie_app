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
    const {bookedMovies} = this.props;
    const {deleting} = this.props;

    if (isEmpty(bookedMovies)) {
      return <Loader />;
    }

    if (this.props.error === true) {
      return <p>Sorry, we could not load your bookings</p>
    }

    return (
      <div>
        {
          bookedMovies[0].map(bookedMovie =>
          (<BookedMovie
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
