import React, {Component} from 'react';
import {Row, Col, Card, Button, Badge} from 'react-bootstrap';

class Car extends Component {
	render() {
		const {carObj} = this.props;
		return (
				<Card>
				{carObj.availability.indexOf(this.props.selectedDate) == -1 ? <Badge style={{position: 'absolute', left: '75%'}} variant="danger">Not Available</Badge> : null}
			    <Card.Img variant="top" src={carObj.photo} />
			    <Card.Body>
			      <Card.Title>{carObj.name}</Card.Title>
			      <Card.Text>
			        &#128186; {carObj.seats}<br />
			        &#9881; {carObj.transmission}<br />
			        &#9981; {carObj.fuel_Type}
			        <span style={{float: 'right'}}><Button variant="outline-primary"><em>Price: &#8377;{carObj.price}</em></Button></span>
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      <Button disabled={carObj.availability.indexOf(this.props.selectedDate) == -1} style={{width: '100%'}} variant="success">Book</Button>
			    </Card.Footer>
			  </Card>
			)
	}
}

export default Car;