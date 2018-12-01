import React, {Component} from 'react';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import { fetchBookings } from '../../actions/fetchBookings.js';
import { deleteBooking } from '../../actions/deleteBooking.js';
import {api} from '../../config';
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
});

export default connect(mapStateToProps, { fetchBook: fetchBookings, deleteBook: deleteBooking })(BookingsList);

//notes
  // fetchBookings = async () => {
  //   const {params} = this.props.match;
  //   this.setState({loading: true});
  //   try {
  //     const response = await axios.get(`${api.url}/mybookings/${params.id}`);
  //     this.setState({loading: false, bookedMovies: response.data});
  //   } catch (error) {
  //     this.setState({loading: false});
  //   }
  // }

  //   deleteBooking = async (id) => {
  //   this.setState({deleting: true});
  //   try {
  //     await axios.delete(`${api.url}/bookings/${id}`);
  //     this.setState({deleting: false});
  //     this.fetchBookings();
  //   } catch (error) {
  //     this.setState({deleting: false});
  //   }
  // }
