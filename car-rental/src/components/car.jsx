import React, {Component} from 'react';
import {Button, Card, Badge} from 'react-bootstrap';
import '../assets/style.css'; 


class Car extends Component {

	selectCar = () => {
		this.props.onSelectCar(this.props.carObj.name);
	}

	render() {
		const {carObj, selectedCar} = this.props;
		return (
				<Card bsPrefix="cardNew" border={selectedCar === carObj.name ? "primary" : ""} onClick={this.selectCar}>
				{carObj.availability.indexOf(this.props.selectedDate) === -1 ? <Badge style={{position: 'absolute', left: '0%'}} variant="danger">Not Available</Badge> : null}
			    <Card.Img variant="top" src={carObj.photo} />
			    <Card.Body>
			      <Card.Title>{carObj.name}</Card.Title>
			      <Card.Text>
			        &#128186; {carObj.seats}<br />
			        &#9881; {carObj.transmission}<br />
			        &#9981; {carObj.fuel_Type}
			        <span style={{position: 'absolute', right: '10px', bottom: '95px'}}><em>&#x1f4c5; {carObj.availability.split(', ').map(day => day[0]) + ' '}</em></span>
			        <span style={{position: 'absolute', right: '10px', bottom: '60px', border: '1px dotted blue', padding: '4px 6px', backgroundColor: '#42A5F5', color: 'white', borderRadius: '4px'}}><em>Price: &#8377;{carObj.price}</em></span>
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      <Button disabled={carObj.availability.indexOf(this.props.selectedDate) === -1} style={{width: '100%'}} variant="success">Book</Button>
			    </Card.Footer>
			  </Card>
			)
	}
}

export default Car;