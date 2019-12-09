import { LOAD_IMAGE_SUCCESS, LOAD_IMAGE_FAILURE } from '../constants/constant';

const initial = {
	base_url: '',
	poster_sizes: ''
};

const image = (state = initial, action) => {
	switch (action.type) {
		case LOAD_IMAGE_SUCCESS:
			// console.log('ini', action);
			return action.image;

		case LOAD_IMAGE_FAILURE:
		default:
			return state;
	}
};

export default image;
