import {ADD_SEARCH, FILTER_SEARCH} from '../constants';

function searchUtility(carsList, action) {
	const newCars = carsList.filter((car, index) => {
		return car.location === action.location
	});
	console.log("New Cars === ", newCars);
}

const bookingQuery = action => {
	let {location ,date, cars} = action;
	const carsList = searchUtility(cars, action);
	return {
		carsList
	};
}

const cars = (state = [], action) => {
	let cars = null;
	state = [];
	switch(action.type) {
		case ADD_SEARCH:
			cars = [...state, bookingQuery(action)]
			return cars;
		default:
			return cars;
	}
}

export default cars;