import {ADD_SEARCH, FILTER_SEARCH, FIND_SEARCH, INITIALISE_CARS, SORT_CARS, PAGE_CHANGE, RESET_STATE} from '../constants';

function searchUtility(carsList, action) {
	const newCars = carsList.filter((car, index) => {
		return car.location === action.location
	});
	return newCars;
}

function findingUtility(carsList, action) {
	const newCars = carsList.filter(
    car => (car.car_Type+' '+car.name).match(new RegExp(action.queryString, 'i')) !== null
  );
	return newCars;
}

const findingQuery = (state = {}, action) => {
	let {queryString} = action;
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


const resetfunction = (state = {}) => {
	return {
		location: '',
		date: ''
	}
}

function filterUtility(carList, filters) {
	let validCount;

	const newCars = carList.filter((car) => {
		
		validCount = 0;
		let carFlag = 0;
		let transmissionFlag = 0;
		let fuelFlag = 0;
		

		if(filters.carType.length === 0) carFlag = true;
		for(let i = 0; i < filters.carType.length; i++) {
			if(car.car_Type.match(new RegExp(filters.carType[i], 'i')) !== null)
				carFlag = true;
		}
		
		if(filters.transmissionType.length === 0) transmissionFlag = true;

		for(let i = 0; i < filters.transmissionType.length; i++) {
			if(car.transmission.match(new RegExp(filters.transmissionType[i], 'i')) !== null)
				transmissionFlag = true;
		}

		if(filters.fuelType.length === 0) fuelFlag = true;
		for(let i = 0; i < filters.fuelType.length; i++) {
			if(car.fuel_Type.match(new RegExp(filters.fuelType[i], 'i')) !== null)
				fuelFlag = true;
		}
				
		if(carFlag && transmissionFlag && fuelFlag)
			return car;
	})
	return newCars;
}

const initCars = action => {
	let {cars} = action;
	return cars;
}

const filterCars = (state = {}, action) => {
	let {filtersObject} = action;
	const cars = filterUtility(JSON.parse(sessionStorage.getItem('sessionCars')).sessionCars, filtersObject)
	return {
		cars: filtersObject.filterCount === 0 ? JSON.parse(sessionStorage.getItem('sessionCars')).sessionCars : cars,
		location: state.location,
		date: state.date,
		carsPerPage: filtersObject.filterCount === 0 ? JSON.parse(sessionStorage.getItem('sessionCars')).sessionCars.slice(0, action.pageSize) : cars.slice(0, action.pageSize),
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
		case RESET_STATE:
			cars = resetfunction(state)
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