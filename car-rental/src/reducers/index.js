import {ADD_SEARCH, FILTER_SEARCH, FIND_SEARCH, INITIALISE_CARS, SORT_CARS, PAGE_CHANGE} from '../constants';

function searchUtility(carsList, action) {
	const newCars = carsList.filter((car, index) => {
		return car.location === action.location
	});
	return newCars;
}

function findingUtility(carsList, action) {
	console.log("Len === ", arguments.length);
	const newCars = carsList.filter(
    car => (car.car_Type+' '+car.name).match(new RegExp(action.queryString, 'i')) !== null
  );
	return newCars;
}

const findingQuery = (state = {}, action) => {
	let {queryString, pageSize} = action;
	const cars = findingUtility(state.cars, action);
	return {
		cars: queryString.length === 0 ? JSON.parse(sessionStorage.getItem('sessionCars')).sessionCars : cars,
		location: state.location,
		date: state.date,
		carsPerPage: queryString.length === 0 ? JSON.parse(sessionStorage.getItem('sessionCars')).sessionCars.slice(0, action.pageSize) : cars.slice(0, action.pageSize)
	};
}

const bookingQuery = (state = {}, action) => {
	let {location ,date, pageSize} = action;
	const cars = searchUtility(state.cars, action);
	sessionStorage.setItem('sessionCars', JSON.stringify({sessionCars: cars}));
	return {
		cars: cars,
		sessionCars: cars,
		location: location,
		date: date,
		carsPerPage: cars.slice(0, pageSize),
		setInitialPage: true
	};
}

const paginate = (state = {}, action) => {
	let {pageSize, pageNumber} = action;
	let logicalPageNumber = --pageNumber
	const carsPerPage = state.cars.slice(logicalPageNumber*pageSize, (logicalPageNumber+1)*pageSize);
	return {
		cars: state.cars,
		carsPerPage: carsPerPage,
		location: state.location,
		date: state.date
	}
}

function filterUtility(carsList, filters) {
	let validCount;
	console.log("Filters ================= ", filters);
	const newCars = carsList.filter((car) => {
		const compareString = car.car_Type + ' ' + car.fuel_Type + ' ' + car.transmission;
		console.log("Compare ====== ", compareString);
		validCount = 0;
		for(var i = 0; i < filters.length; i++) {
			if(compareString.match(new RegExp(filters[i], 'i')) !== null)
				validCount++;
		}
		console.log("valid count === ", validCount);
		if(validCount === filters.length)
			return car;
	})
	console.log("New carsssss ====== ", newCars);
	return newCars;
}

const initCars = action => {
	let {cars} = action;
	return cars;
}

const filterCars = (state = {}, action) => {
	let {filtersArray} = action;
	console.log("Filters input = ", filtersArray);
	const cars = filterUtility(JSON.parse(sessionStorage.getItem('sessionCars')).sessionCars, filtersArray)
	console.log("page size = ", action.pageSize);
	return {
		cars: filtersArray.length === 0 ? JSON.parse(sessionStorage.getItem('sessionCars')).sessionCars : cars,
		location: state.location,
		date: state.date,
		carsPerPage: filtersArray.length === 0 ? JSON.parse(sessionStorage.getItem('sessionCars')).sessionCars.slice(0, action.pageSize) : cars.slice(0, action.pageSize),
		setInitialPage: true
	}
}

const sortCars = (state = {}, action) => {
	let {sortParam} = action;
	const cars = !sortParam ? state.cars.sort((a,b) => {return a.price - b.price}) : state.cars.sort((a,b) => {return b.price - a.price})
	return {
		cars: cars,
		location: state.location,
		date: state.date,
		carsPerPage: cars.slice(0,action.pageSize),
		setInitialPage: true
	};
}

const cars = (state = {}, action) => {
	let cars = null;
	state = JSON.parse(sessionStorage.getItem('cars') || '{}');
	switch(action.type) {
		case INITIALISE_CARS:
			cars = {...state, cars: initCars(action)}
			sessionStorage.setItem('cars', JSON.stringify(cars));
			sessionStorage.setItem('carsOriginal', JSON.stringify(cars));
			return cars;
		case ADD_SEARCH:
			cars = action.initSearch ? bookingQuery(state, action) : bookingQuery(JSON.parse(sessionStorage.getItem('carsOriginal')), action)
			sessionStorage.setItem('cars', JSON.stringify(cars));
			return cars;
		case PAGE_CHANGE:
			cars = paginate(state, action)
			return cars;
		case FILTER_SEARCH:
			cars = filterCars(state, action)
			sessionStorage.setItem('cars', JSON.stringify(cars));
			return cars;
		case FIND_SEARCH:
			cars = findingQuery(state, action)
			sessionStorage.setItem('cars', JSON.stringify(cars));
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