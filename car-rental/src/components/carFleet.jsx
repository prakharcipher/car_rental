import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Row, Card, Button, CardDeck} from 'react-bootstrap';
import Car from './car';
import './style.css';


class CarFleet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCar: ''
		}
	}

	handleSelection = (name) => {
		this.setState({selectedCar: name});
	}

	render() {
		return (
				<Row>
					<CardDeck  style={{display: 'flex', flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
					  {this.props.cars && this.props.cars.carsPerPage && this.props.cars.carsPerPage.map((car, index) => {
					  	return (
					  			<Car  key={index} carObj={car} selectedDate={this.props.cars.date} onSelectCar={this.handleSelection} selectedCar={this.state.selectedCar} />
					  		)
					  })}
					</CardDeck>
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