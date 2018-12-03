
//Movie Details
	// fetchMovie = async () => {
	// 	const {params} = this.props.match;
	// 	this.setState({loading: true});
	// 	try {
	// 		const response = await axios.get(`${api.url}/movies/${params.id}`);
 //      this.setState({loading: false, movie: response.data});
	// 	} catch (error) {
	// 		this.setState({loading: false});
	// 	}
	// }



//BookingsList
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


//MoviesList
  // fetchMovies = async () => {
  //   this.setState({loading: true});
  //   try {
  //     const response = await axios.get(`${api.url}/movies`);
  //     this.setState({loading: false, movies: response.data});
  //   } catch (error) {
  //     this.setState({loading: false});
  //   }
  // }


//BookingForm
 //  	addBooking = async (data) => {
	// 	this.setState({isSendingData: true});
	// 	try {
	// 		await axios.post(`${api.url}/bookings`, data);
	// 		this.setState({isSendingData: false, booked: true});
	// 	} catch (error) {
	// 		this.setState({isSendingData: false});
	// 	}
	// }