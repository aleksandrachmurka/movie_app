import React, {Component} from 'react';

class Counter  extends Component {
	state = {
			value: 0,
		}

	decrement = () => {
		if (this.state.value === 0) return;


		this.setState((prevState) => {
			return{
				value: prevState.value -1
			}
		})


	}

	increment = () => {
		this.setState((prevState) => {
			return{
				value: prevState.value +1
			}
		})

	}


	render(){
		return (
			<div>
				<button onClick={this.decrement}>minus</button>
				<button onClick={this.increment}>plus</button>
				{this.state.value}
			</div>
		)

	}

}

export default Counter