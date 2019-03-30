import React, {Component} from 'react';
import {Row, Container, Col, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import Filters from './Filters';
import CarFleet from './carFleet';

export default class SearchResults extends Component {
	render() {
		return (
				<div>
				<Container>
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