import React, {Component} from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';

class Car extends Component {
	render() {
		const {imgUrl, title, carDetails} = this.props;
		return (
				<Card>
			    <Card.Img variant="top" src={imgUrl} />
			    <Card.Body>
			      <Card.Title>{title}</Card.Title>
			      <Card.Text>
			        
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      <Button style={{width: '100%'}} variant="success">Book</Button>
			    </Card.Footer>
			  </Card>
			)
	}
}

export default Car;