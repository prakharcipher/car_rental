import React, {Component} from 'react';
import {Row, Col, Pagination} from 'react-bootstrap';
import {connect} from 'react-redux';

class FleetPagination extends Component {
	constructor(props) {
		super(props);
		this.state ={
			activePage: 1,
			pageLimit: 6,
			paginationSize: []
		}
	}

	componentDidMount() {
		const paginationSizeCopy = [];
		let limit;
		if(this.props.cars.cars.length % this.state.pageLimit === 0)
			limit = this.props.cars.cars.length/this.state.pageLimit;
		else
			limit = this.props.cars.cars.length/this.state.pageLimit + 1;
		for(var i = 1; i <= limit; i++)
			paginationSizeCopy.push(i);

		this.setState({paginationSize: paginationSizeCopy});
	}

	componentDidUpdate(prevProps) {
		if(this.props.cars !== prevProps.cars) {
			this.setState({activePage: 1});
			const paginationSizeCopy = [];
			let limit;
			if(this.props.cars.cars.length % this.state.pageLimit === 0)
				limit = this.props.cars.cars.length/this.state.pageLimit;
			else
				limit = this.props.cars.cars.length/this.state.pageLimit + 1;
			for(var i = 1; i <= limit; i++)
				paginationSizeCopy.push(i);

			this.setState({paginationSize: paginationSizeCopy});
		}
	}

	render() {
		return (
				<Row>
					<Col>
						<Pagination size="sm" style={{width: '50%', margin: 'auto'}}>
							{this.state.paginationSize && this.state.paginationSize.map((pos, index) => {
								return (
										<Pagination.Item key={pos} active={pos===this.state.activePage}>{pos}</Pagination.Item>
									)
							})}
						</Pagination>
					</Col>
				</Row>
			)
	}
}

function mapStateToProps(state) {
	return {
		cars: state
	}
}

export default connect(mapStateToProps, null)(FleetPagination)