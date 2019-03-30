import React, { Component } from 'react';
import {Row, Col, Navbar, Nav, Form, Button} from 'react-bootstrap';

export default class Filters extends Component {
	render() {
		return (
			<div>
				<Row>
					<Col>
						<Navbar bg="light" variant="light">
					    <Navbar.Brand>Sort By:</Navbar.Brand>
					    <Nav className="mr-auto">
					      <Nav.Link href="#home">Price &#8593;</Nav.Link>					      
					    </Nav>
					    <Form inline>
					      <Form.Control type="text" placeholder="Search Cars" className="mr-sm-2" />
					      <Button variant="outline-primary">Search</Button>
					    </Form>
					  </Navbar>
					</Col>
				</Row>
				<Row>
					<Col style={{textAlign: 'right'}}>
						Transmission Type:
					</Col>
					<Col>
						<div>
								<Form.Group controlId="formBasicChecbox">
							    <Form.Check type="checkbox" label="Manual" />
							  </Form.Group>
								<Form.Group controlId="formBasicChecbox">
							    <Form.Check type="checkbox" label="Automatic" />
							  </Form.Group>
						</div>
					</Col>
					<Col style={{textAlign: 'right'}}>
						<strong>Car Type:</strong>
					</Col>
					<Col>
						<div>
								<Form.Group controlId="formBasicChecbox">
							    <Form.Check type="checkbox" label="Hatchback" />
							  </Form.Group>
								<Form.Group controlId="formBasicChecbox">
							    <Form.Check type="checkbox" label="Sedan" />
							  </Form.Group>
							  <Form.Group controlId="formBasicChecbox">
							    <Form.Check type="checkbox" label="SUV" />
							  </Form.Group>
							  <Form.Group controlId="formBasicChecbox">
							    <Form.Check type="checkbox" label="Mini SUV" />
							  </Form.Group>
						</div>
					</Col>
					<Col style={{textAlign: 'right'}}>
						Fuel Type:
					</Col>
					<Col>
						<div>
								<Form.Group controlId="formBasicChecbox">
							    <Form.Check type="checkbox" label="Petrol" />
							  </Form.Group>
								<Form.Group controlId="formBasicChecbox">
							    <Form.Check type="checkbox" label="Diesel" />
							  </Form.Group>
						</div>
					</Col>
				</Row>
				</div>
			)
	}
}