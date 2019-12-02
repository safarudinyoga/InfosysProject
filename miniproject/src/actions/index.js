import {
    LOAD_DATA,
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE
} from '../constants/constant';
import { request } from '../helpers/accessAPI';

const loadDataSuccess = (movie) => {
    return {
        type: LOAD_DATA, movie
    }
}

const loadDataFailure = () => {
    return {
        type: LOAD_DATA_FAILURE
    }
}

export const loadData = () => {
    return dispatch => {
        return request.get()
    }
}

