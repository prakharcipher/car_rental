import React, { Component } from 'react';
import {Row, Col, Navbar, Nav, Form, Button} from 'react-bootstrap';
import {findSearch, sortCars, filterSearch} from '../actions';
import {connect} from 'react-redux';

class Filters extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: '',
			sortParam: false,
			pageSize: 6,
			filtersArray: []
		}
	}

	handleClick = () => {
		this.props.findSearch(this.state.searchValue, this.state.pageSize);
	}

	handleSort = () => {
		this.setState({sortParam: !this.state.sortParam}, () => {
			this.props.sortCars(this.state.sortParam, this.state.pageSize);
		})
	}

	handleChange = (ev) => {
		let filtersArrayCopy = [];
		if(ev.target.checked) {			
			filtersArrayCopy = [...this.state.filtersArray, ev.target.value]
		} else {
			const filtersArrayClone = [...this.state.filtersArray];
			filtersArrayCopy = filtersArrayClone.filter(elem => elem !== ev.target.value);
		}
		this.setState({filtersArray: filtersArrayCopy}, () => {
			this.props.filterSearch(this.state.filtersArray, this.state.pageSize);
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
					<Col xs={1} className="hidden-xs" style={{borderRight: '1px solid black', textAlign: 'center'}}>
						<div style={{fontSize: '15px'}}>Filter By:</div>
					</Col>
					<Col xs={2} className="hidden-xs" style={{textAlign: 'right'}}>
						Transmission Type |
					</Col>
					<Col xs={1} className="hidden-xs">
						<div>
								<Form.Group onChange={this.handleChange} name="transmission" controlId="formBasicChecbox">
							    <Form.Check value="Manual" type="checkbox" inline label="Manual" />
							    <Form.Check value="Automatic" type="checkbox" inline label="Automatic" />
							  </Form.Group>
						</div>
					</Col>
					<Col xs={3} className="hidden-xs" style={{textAlign: 'right'}}>
						Car Type |
					</Col>
					<Col xs={1} className="hidden-xs">
						<div>
								<Form.Group onChange={this.handleChange} controlId="formBasicChecbox" style={{marginRight: '-20px'}} >
							    <Form.Check value="Hatchback" type="checkbox" inline label="Hatchback" />
							    <Form.Check value="Sedan" type="checkbox" inline label="Sedan" />
							    <Form.Check value="SUV" type="checkbox" inline label="SUV" />
							    <Form.Check value="Mini SUV" type="checkbox" inline label="Mini SUV" />
							  </Form.Group>
						</div>
					</Col>
					<Col xs={3} className="hidden-xs" style={{textAlign: 'right'}}>
						Fuel Type |
					</Col>
					<Col xs={1} className="hidden-xs">
						<div>
								<Form.Group onChange={this.handleChange} controlId="formBasicChecbox">
							    <Form.Check value="Petrol" type="checkbox" inline label="Petrol" />
							    <Form.Check value="Diesel" type="checkbox" inline label="Diesel" />
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

export default connect(mapStateToProps , {findSearch, sortCars, filterSearch})(Filters)