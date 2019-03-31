import React, {Component} from 'react';
import {Row, Container, Col, Form, Button, Navbar } from 'react-bootstrap';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import Filters from './Filters';
import FleetPagination from './fleetPagination';
import CarFleet from './carFleet';
import Logo from '../images.png';
import {addSearch} from '../actions';

class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: '',
			date: ''
		}
	}

	handleLocation = (ev) => {
		this.setState({location: ev.target.value})
	}

	handleDate = (date) => {
		this.setState({date});
	}

	handleClick = () => {
		this.props.addSearch(this.state.location, this.state.date.toString().substr(0,3), false)
	}

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
								<Form.Control onChange={this.handleLocation} as="select" name="location">
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
								<DatePicker onChange={this.handleDate} id="example-datepicker" name="startDate" selected={new Date()} />
							</Form.Group>
						</Col>
						<Col>
							<Button onClick={this.handleClick} style={{float: 'right'}} variant="success">Modify Search</Button>
						</Col>
					</Row>
					<Filters />
					<CarFleet />
					<FleetPagination /><br />
					</Container>
				</div>
			)
	}
}

export default connect(null, {addSearch})(SearchResults)