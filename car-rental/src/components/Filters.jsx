import React, { Component } from 'react';
import {Row, Col, Navbar, Nav, Form, Button} from 'react-bootstrap';
import {findSearch, sortCars} from '../actions';
import {connect} from 'react-redux';

class Filters extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: '',
			sortParam: false
		}
	}

	handleClick = () => {
		this.props.findSearch(this.state.searchValue);
	}

	handleSort = () => {
		this.setState({sortParam: !this.state.sortParam}, () => {
			this.props.sortCars(this.state.sortParam);
		})
	}

	render() {
		return (
			<div>
				<Row>
					<Col className="hidden-xs">
						<Navbar bg="light" variant="light">
					    <Navbar.Brand>Sort By:</Navbar.Brand>
					    <Nav className="mr-auto">
					      <Nav.Link onClick={this.handleSort}>Price &#8593;</Nav.Link>					      
					    </Nav>
					    <Form inline>
					      <Form.Control type="text" placeholder="Search Cars" value={this.state.searchValue} onChange={(ev) => this.setState({searchValue: ev.target.value})} className="mr-sm-2" />
					      <Button onClick={this.handleClick} variant="outline-primary">Search</Button>
					    </Form>
					  </Navbar>
					</Col>
				</Row>
				<Row>
					<Col className="hidden-xs" style={{textAlign: 'right'}}>
						Transmission Type:
					</Col>
					<Col className="hidden-xs">
						<div>
								<Form.Group controlId="formBasicChecbox">
							    <Form.Check type="checkbox" label="Manual" />
							  </Form.Group>
								<Form.Group controlId="formBasicChecbox">
							    <Form.Check type="checkbox" label="Automatic" />
							  </Form.Group>
						</div>
					</Col>
					<Col className="hidden-xs" style={{textAlign: 'right'}}>
						<strong>Car Type:</strong>
					</Col>
					<Col className="hidden-xs">
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
					<Col className="hidden-xs" style={{textAlign: 'right'}}>
						Fuel Type:
					</Col>
					<Col className="hidden-xs">
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

function mapStateToProps(state) {
	return {
		cars: state
	};
}

export default connect(mapStateToProps , {findSearch, sortCars})(Filters)