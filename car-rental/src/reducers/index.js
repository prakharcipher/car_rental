import {ADD_SEARCH, FILTER_SEARCH, FIND_SEARCH, INITIALISE_CARS, SORT_CARS} from '../constants';

function searchUtility(carsList, action) {
	const newCars = carsList.filter((car, index) => {
		return car.location === action.location
	});
	return newCars;
}

function findingUtility(carsList, action) {
	// const newCars = carsList.filter((car, index) => {
	// 	const checkableString = car.car_Type + ' ' + car.name;
	// 	console.log('String === ', checkableString);
	// 	const re = new RegExp(action.queryString, 'i');
	// 	return ().match(re) !== null;
	// });

	const newCars = carsList.filter(
    car => (car.car_Type+' '+car.name).match(new RegExp(action.queryString, 'i')) !== null
  );
	return newCars;
}

const findingQuery = (state = {}, action) => {
	let {queryString} = action;
	const cars = findingUtility(state.cars, action);
	return {
		cars: cars,
		location: state.location,
		date: state.date
	};
}

const bookingQuery = (state = {}, action) => {
	let {location ,date} = action;
	const cars = searchUtility(state.cars, action);
	return {
		cars: cars,
		location: location,
		date: date
	};
}

const initCars = action => {
	let {cars} = action;
	return cars;
}

const sortCars = (state = {}, action) => {
	let {sortParam} = action;
	const cars = !sortParam ? state.cars.sort((a,b) => {return a.price - b.price}) : state.cars.sort((a,b) => {return b.price - a.price})
	return {
		cars: cars,
		location: state.location,
		date: state.date
	};
}

const cars = (state = {}, action) => {
	let cars = null;
	state = JSON.parse(sessionStorage.getItem('cars') || '{}');
	switch(action.type) {
		case INITIALISE_CARS:
			cars = {...state, cars: initCars(action)}
			sessionStorage.setItem('cars', JSON.stringify(cars));
			return cars;
		case ADD_SEARCH:
			cars = bookingQuery(state, action)
			sessionStorage.setItem('cars', JSON.stringify(cars));
			return cars;
		case FIND_SEARCH:
			cars = findingQuery(state, action)
			return cars;
		case SORT_CARS:
			cars = sortCars(state, action)
			sessionStorage.setItem('cars', JSON.stringify(cars));
			return cars;
		default:
			return state;
	}
}

export default cars;