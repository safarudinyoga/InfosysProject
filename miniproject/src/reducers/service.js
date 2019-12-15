import { MOVIE_SELECTED, MOVIE_DESELECTED } from '../constants/constant';

const service = (state = [ 1, 2, 3, 4, 5, 6 ], action) => {
	switch (action.type) {
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
