import { LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE } from '../constants/constant';

const initial = {
	original_title: '',
	backdrop_path: '',
	vote_averange: 0,
	vote_count: 0,
	buy: false
};

const movie = (state = initial, action) => {
	switch (action.type) {
		case LOAD_DATA_SUCCESS:
			// console.log('reducers', state);
			return {
				...state,
				...action.movie
			};

		case LOAD_DATA_FAILURE:
		default:
			return state;
	}
};

export default movie;
