import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Row, CardColumns, Card, Button} from 'react-bootstrap';
import Car from './car';


class CarFleet extends Component {
	render() {
		console.log("This props ==== ", this.props.cars);
		return (
				<Row>
					<CardColumns>
					  {this.props.cars && this.props.cars[0].carsList.map((car, index) => {
					  	return (
					  			<Car key={index} carObj={car} selectedDate={this.props.cars[0].date} />
					  		)
					  })}
					</CardColumns>
				</Row>
			)
	}
}

function mapStateToProps(state) {
	return {
		cars: state
	};
}

export default connect(mapStateToProps, null)(CarFleet);