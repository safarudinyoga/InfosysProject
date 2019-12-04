import {
    LOAD_RECOMMENDATION_SUCCESS,
    LOAD_RECOMMENDATION_FAILURE
} from '../constants/constant';

const recommendation = (state = {}, action) => {
    switch (action.type) {
        case LOAD_RECOMMENDATION_SUCCESS:
            console.log('recom');
            return {
                ...action.recommendation
            }

        case LOAD_RECOMMENDATION_FAILURE:
        default:
            return state
    }
}

export default recommendation;