import { EDIT_ON, EDIT_OFF, MOVIE_SELECTED, MOVIE_DESELECTED } from '../constants/constant';

const service = (state = {}, action) => {
	switch (action.type) {
		case EDIT_ON:
			return {
				...state
			};

		case EDIT_OFF:
			return {
				...state
			};

		case MOVIE_SELECTED:
			// console.log('reducers button', action.movie.angka);
			return {
				...state,
				...action.movie.angka
			};

		case MOVIE_DESELECTED:
			return {
				...state
			};

		default:
			return {
				...state
			};
	}
};

export default service;
