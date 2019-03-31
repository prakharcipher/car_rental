import React, {Component} from 'react';
import {Row, Col, Form, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addSearch, initialiseCars } from '../actions';
import DatePicker from 'react-datepicker';
import Flex from '../flex.jpg';

import "react-datepicker/dist/react-datepicker.css";

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: new Date(),
			location: ''
		}
	}

	componentDidMount() {
		fetch('https://api.sheety.co/311576ae-321a-43e3-9a5b-61b3ac373d85')
		.then(resp => resp.json())
		.then((data) => {
			this.props.initialiseCars(data);
		})
	}

	handleLocation = (ev) => {
		this.setState({location: ev.target.value});
	}

	handleStartDate = (date) => {
		this.setState({startDate: date});
	}

	handleSearch = () => {
			this.props.addSearch(this.state.location, this.state.startDate.toString().substr(0,3), true);
			this.props.history.push('/search');			
	}

	render() {
		return (
			<div>
				<Container style={{marginTop: '20%', backgroundColor: 'blue'}}>
					<Row>
						<Col>
							<Form.Group>
								<Form.Control style={{width: '50%', margin: 'auto'}} as="select" name="location" onChange={this.handleLocation}>
									<option value="">Select Pick-up Point</option>
									<option value="Koramangala">Koramangala</option>
									<option value="HSR Layout">HSR Layout</option>
									<option value="Indiranagar">Indiranagar</option>
								</Form.Control>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group style={{width: '50%', margin: 'auto'}}>
								<DatePicker id="example-datepicker" name="startDate" minDate={new Date()} onChange={this.handleStartDate} selected={this.state.startDate} />
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Button style={{width: '100%'}} onClick={this.handleSearch} variant="success"><Link to="/search">Search</Link></Button>
						</Col>
					</Row>
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

export default connect(mapStateToProps, { addSearch, initialiseCars })(
  Landing
);