import {
    LOAD_DETAIL_SUCCESS,
    LOAD_DETAIL_FAILURE
} from '../constants/constant';

const detail = (state = {}, action) => {
    switch (action.type) {
        case LOAD_DETAIL_SUCCESS:
            console.log('ini');
            return {
                ...action.detail
            }

        case LOAD_DETAIL_FAILURE:
        default:
            return state
    }
}

export default detail;