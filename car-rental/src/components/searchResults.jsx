import React, {Component} from 'react';
import {Row, Container, Col, Form, Button, Navbar } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import Filters from './Filters';
import CarFleet from './carFleet';
import Logo from '../images.png';

export default class SearchResults extends Component {
	render() {
		return (
				<div>
				<Container>
				<Navbar bg="light">
			    <Navbar.Brand>
			      <img
			        alt=""
			        src={Logo}
			        width="30"
			        height="30"
			        className="d-inline-block align-top"
			      />
			      {' Car-Rental'}
			    </Navbar.Brand>
			  </Navbar>
					<Row>
						<Col>
							<Form.Group>								
								<Form.Control as="select" name="location">
									<option value="">Select Pick-up Point</option>
									<option value="Koramangala">Koramangala</option>
									<option value="HSR Layout">HSR Layout</option>
									<option value="Indiranagar">Indiranagar</option>
								</Form.Control>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group>
								<label>Pick-up Date</label>							
								<DatePicker id="example-datepicker" name="startDate" selected={new Date()} />
							</Form.Group>
						</Col>
						<Col>
							<Button style={{float: 'right'}} variant="success">Modify Search</Button>
						</Col>
					</Row>
					<Filters />
					<CarFleet />
					</Container>
				</div>
			)
	}
}