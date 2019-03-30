import { ADD_SEARCH, FILTER_SEARCH, FIND_SEARCH, INITIALISE_CARS, SORT_CARS } from '../constants';

export const addSearch = (location,date) => {
	const action = {
		type: ADD_SEARCH,
		location,
		date
	};
	return action;
};

export const initialiseCars = (cars) => {
	const action = {
		type: INITIALISE_CARS,
		cars
	};
	return action;
};

export const filterSearch = (transmissionType, carType, fuelType) => {
	const action = {
		type: FILTER_SEARCH,
		transmissionType,
		carType,
		fuelType
	};
	return action;
};

export const findSearch = (queryString) => {
	const action = {
		type: FIND_SEARCH,
		queryString
	};
	return action;
};

export const sortCars = (sortParam) => {
	const action = {
		type: SORT_CARS,
		sortParam
	};
	return action;
}