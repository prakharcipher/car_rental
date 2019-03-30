import { ADD_SEARCH, FILTER_SEARCH } from '../constants';

export const addSearch = (location,date,cars) => {
	const action = {
		type: ADD_SEARCH,
		location,
		date,
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
}