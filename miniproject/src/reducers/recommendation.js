import { LOAD_RECOMMENDATION_SUCCESS, LOAD_RECOMMENDATION_FAILURE } from '../constants/constant';

const initial = {
	original_title: '',
	overview: '',
	popularity: 0,
	poster_path: '',
	vote_average: 0,
	vote_count: 0
};

const recommendation = (state = initial, action) => {
	switch (action.type) {
		case LOAD_RECOMMENDATION_SUCCESS:
			console.log('recom', action);
			return {
				...action.recommendation
			};

		case LOAD_RECOMMENDATION_FAILURE:
		default:
			return state;
	}
};

export default recommendation;
