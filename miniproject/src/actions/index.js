import {
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE,
    LOAD_IMAGE_SUCCESS,
    LOAD_IMAGE_FAILURE
} from '../constants/constant';
import { request } from '../helpers/accessAPI';


const loadDataSuccess = (movie) => {
    return {
        type: LOAD_DATA_SUCCESS, movie
    }
}

const loadDataFailure = () => {
    return {
        type: LOAD_DATA_FAILURE
    }
}

export const loadData = () => {
    return dispatch => {
        return request.get(`/3/movie/550?api_key=9ba639c7c8d42e4b827058a99fb728e5`).then(response => {
            // console.log(response.data);
            dispatch(loadDataSuccess(response.data))
        }).catch(err => {
            console.log(err);
            dispatch(loadDataFailure())
        })
    }
}

const loadImageSuccess = image => {
    return {
        type: LOAD_IMAGE_SUCCESS, image
    }
}

const loadImageFailure = () => {
    return {
        type: LOAD_IMAGE_FAILURE
    }
}

export const loadImage = () => {
    return dispatch => {
        return request.get(`/3/configuration?api_key=9ba639c7c8d42e4b827058a99fb728e5`).then(response => {
            // console.log('index-image',response.data.images);
            dispatch(loadImageSuccess(response.data.images))
        }).catch(err => {
            console.log(err);
            dispatch(loadImageFailure())
        })
    }
}

