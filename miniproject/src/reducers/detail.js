import { LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAILURE } from '../constants/constant';

const initial = {
	original_title: '',
	popularity: 0,
	poster_path: '',
	overview: '',
	release_date: '',
	runtime: 0,
	vote_average: 0,
	vote_count: 0,
	tagline: ''
};

const detail = (state = initial, action) => {
	switch (action.type) {
		case LOAD_DETAIL_SUCCESS:
			// console.log('ini', action);
			return {
				...action.detail
			};

		case LOAD_DETAIL_FAILURE:
		default:
			return state;
	}
};

export default detail;
