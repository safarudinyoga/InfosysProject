import {
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE
} from '../constants/constant';

const movie = (state = {}, action) => {
    switch (action.type) {
        case LOAD_DATA_SUCCESS:
            return {
                ...action.movie
            }

        case LOAD_DATA_FAILURE:
        default:
            return state
    }
}

export default movie;