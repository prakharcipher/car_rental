import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import {pageChange} from '../actions';
import {connect} from 'react-redux';

class FleetPagination extends Component {
	constructor(props) {
		super(props);
		this.state ={
			activePage: 1,
			pageLimit: 6,
			paginationSize: [],
			initialPage: 0
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
		this.props.pageChange(this.state.activePage, this.state.pageLimit);
	}

	componentDidUpdate(prevProps) {
		if(this.props.cars !== prevProps.cars) {
			const paginationSizeCopy = [];
			let limit;
			if(this.props.cars.cars.length % this.state.pageLimit === 0)
				limit = this.props.cars.cars.length/this.state.pageLimit;
			else
				limit = this.props.cars.cars.length/this.state.pageLimit + 1;
			for(var i = 1; i <= limit; i++)
				paginationSizeCopy.push(i);
			if(this.props.cars.setInitialPage)
				this.setState({activePage: 1});
			this.setState({paginationSize: paginationSizeCopy});
		}		
	}


	handleSelectPagination = (page) => {
		this.setState({activePage: page}, () => {
			this.props.pageChange(this.state.activePage, this.state.pageLimit);
		})
	}

	render() {
		return (
				<Row>
					<Col>
					<div style={{width: '200px', margin: 'auto'}}>
						<ReactPaginate
	            previousLabel={"Prev"}
	            nextLabel={"Next"}
	            breakLabel={"..."}
	            initialPage={this.state.activePage-1}
	            forcePage={this.state.activePage-1}
	            breakClassName={"break-me"}
	            pageCount={this.state.paginationSize.length}
	            marginPagesDisplayed={2}
	            pageRangeDisplayed={5}
	            containerClassName={"pagination"}
	            subContainerClassName={"pages pagination"}
	            activeClassName={"active"}
	            onPageChange={(data) => this.handleSelectPagination(data.selected + 1)}
	            disableInitialCallback={true}
	          />
	          </div>
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

export default connect(mapStateToProps, {pageChange})(FleetPagination)