import React, {Component} from 'react';
import {Row, CardColumns, Card, Button} from 'react-bootstrap';
import Car from './car';

const arr = [1,2,3,4,5,6,7,8];

class CarFleet extends Component {
	render() {
		return (
				<Row>
					<CardColumns>
					  {arr.map((arr, index) => {
					  	return (
					  			<Car key={arr} />
					  		)
					  })}
					</CardColumns>
				</Row>
			)
	}
}

export default CarFleet;