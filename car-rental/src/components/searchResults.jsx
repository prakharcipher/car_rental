import React, {Component} from 'react';
import {Row, Container, Col, Form, Button, Navbar } from 'react-bootstrap';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import Filters from './Filters';
import FleetPagination from './fleetPagination';
import CarFleet from './carFleet';
import Logo from '../assets/images.png';
import {addSearch} from '../actions';

class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: '',
			date: '',
			pageLimit: 6
		}
	}

	handleLocation = (ev) => {
		this.setState({location: ev.target.value})
	}

	handleDate = (date) => {
		this.setState({date});
	}

	handleClick = () => {
		this.props.addSearch(this.state.location, this.state.date.toString(), false, this.state.pageLimit)
	}

	componentWillMount() {
		console.log("Store ==== ", this.props.cars);
		if(this.props.cars.location === '' || this.props.cars.date === '')
			this.props.history.push('/');
	}

	render() {
		return (
				<div style={{backgroundColor: '#f9f9eb'}}>
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
			    <Navbar.Collapse className="justify-content-end">
				    <Navbar.Text>
				      Selected Date: <span style={{color: 'black'}}>{this.props.cars.date.substr(0,15)}</span>
				    </Navbar.Text>
				  </Navbar.Collapse>
			  </Navbar>
					<Row>
						<Col>
							<Form.Group>							
								<Form.Control onChange={this.handleLocation} defaultValue={this.props.cars.location} as="select" name="location">
									<option value="">Select Pick-up Point</option>
									<option value="Koramangala">Koramangala</option>
									<option value="HSR Layout">HSR Layout</option>
									<option value="Indiranagar">Indiranagar</option>
								</Form.Control>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group>
								<label style={{marginRight: '5px'}}>Pick-up Date</label>							
								<DatePicker onChange={this.handleDate} id="example-datepicker" minDate={new Date()} name="startDate" />
							</Form.Group>
						</Col>
						<Col>
							<Button onClick={this.handleClick} style={{float: 'right'}} variant="success">Modify Search</Button>
						</Col>
					</Row>
					<Filters /><br />
					<CarFleet />
					<FleetPagination /><br />
					</Container>
				</div>
			)
	}
}

function mapStateToProps(state) {
	return {
		cars: state
	}
}

export default connect(mapStateToProps, {addSearch})(SearchResults)