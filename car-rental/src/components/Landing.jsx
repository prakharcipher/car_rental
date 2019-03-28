import React, {Component} from 'react';
import {Row, Col, Form, Container} from 'react-bootstrap';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

export default class Landing extends Component {
	render() {
		return (
			<div>
				<Container>
					<Row>
						<Col>
							<Form.Group>
								{/*<ControlLabel>Location</ControlLabel>*/}
								<Form.Control as="select">
									<option value="">Select Pick-up Point</option>
									<option value="Koramangala">Koramangala</option>
									<option value="HSR Layout">HSR Layout</option>
									<option value="Indiranagar">Indiranagar</option>
								</Form.Control>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group>
							{/*	<ControlLabel>Label</ControlLabel>*/}
								<DatePicker id="example-datepicker" selected={new Date()} />
							</Form.Group>
						</Col>
					</Row>
					</Container>
		  </div>
			)
	}
}