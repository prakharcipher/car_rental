import React, {Component} from 'react';
import {Row, Col, Form, Button, Container} from 'react-bootstrap';
import Background from '../assets/flex.png';
import { connect } from 'react-redux';
import { addSearch, initialiseCars, resetState } from '../actions';
import DatePicker from 'react-datepicker';
import '../assets/style.css';

import "react-datepicker/dist/react-datepicker.css";

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: new Date(),
			location: '',
			pageSize: 6,
			showError: false
		}
	}

	componentDidMount() {
		fetch('https://api.sheety.co/311576ae-321a-43e3-9a5b-61b3ac373d85')
		.then(resp => resp.json())
		.then((data) => {
			this.props.initialiseCars(data);
		})

		this.props.resetState();
	}

	handleLocation = (ev) => {
		this.setState({location: ev.target.value});
	}

	handleStartDate = (date) => {
		this.setState({startDate: date});
	}

	handleSearch = () => {
		if(this.state.location !== '') {
			this.setState({showError: false})
			this.props.addSearch(this.state.location, this.state.startDate.toString(), true, this.state.pageSize);
			this.props.history.push('/search');						
		} else {
			this.setState({showError: true})
		}
	}

	render() {
		return (
			<div style={{backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '820px', width: '100%'}}>
				<Container className="mobileOnly" style={{position: 'absolute', top: '20%', left: '10%', backgroundColor: '#e6f3ff', padding: '20px', border: '1px solid #bfbfbf', boxShadow: '2px 2px 8px gray', opacity: '0.9'}}>
					<Row>
						<Col style={{textAlign: 'center'}}>
						<label>Location</label>
						<div>
							<Form.Group>
								<Form.Control className="mobileFriendly" style={{width: '30%', margin: 'auto', height: '25px'}} as="select" name="location" onChange={this.handleLocation}>
									<option value="">Select Pick-up Point</option>
									<option value="Koramangala">Koramangala</option>
									<option value="HSR Layout">HSR Layout</option>
									<option value="Indiranagar">Indiranagar</option>
								</Form.Control>
							</Form.Group>
							</div>
						</Col>
						<Col style={{textAlign: 'center'}}>
						<label>Pick-up Date</label>
						<div>
							<Form.Group className="mobileDate" style={{width: '50%', margin: 'auto'}}>
								<DatePicker id="example-datepicker" name="startDate" minDate={new Date()} onChange={this.handleStartDate} selected={this.state.startDate} />
							</Form.Group>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div style={{width: '200px', margin: 'auto'}}>
								<Button style={{width: '100%'}} onClick={this.handleSearch} variant="success">Search</Button>
								{this.state.showError ? <span style={{color: 'red'}}>Please select location and date</span> : null}
							</div>
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

export default connect(mapStateToProps, { addSearch, initialiseCars, resetState })(
  Landing
);