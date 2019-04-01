import { ADD_SEARCH, FILTER_SEARCH, FIND_SEARCH, INITIALISE_CARS, SORT_CARS, PAGE_CHANGE } from '../constants';

export const addSearch = (location,date, initSearch, pageSize) => {
	const action = {
		type: ADD_SEARCH,
		location,
		date,
		initSearch,
		pageSize
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

export const pageChange = (pageNumber, pageSize) => {
	const action = {
		type: PAGE_CHANGE,
		pageNumber,
		pageSize
	};
	return action;
}

export const filterSearch = (filtersObject, pageSize) => {
	const action = {
		type: FILTER_SEARCH,
		filtersObject,
		pageSize
	};
	return action;
};

export const findSearch = (queryString, pageSize) => {
	const action = {
		type: FIND_SEARCH,
		queryString,
		pageSize
	};
	return action;
};

export const sortCars = (sortParam, pageSize) => {
	const action = {
		type: SORT_CARS,
		sortParam,
		pageSize
	};
	return action;
}