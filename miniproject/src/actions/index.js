import {
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE,
    LOAD_IMAGE_SUCCESS,
    LOAD_IMAGE_FAILURE,
    LOAD_DETAIL_SUCCESS,
    LOAD_DETAIL_FAILURE,
    LOAD_RECOMMENDATION_SUCCESS,
    LOAD_RECOMMENDATION_FAILURE
} from '../constants/constant';
import { request } from '../helpers/accessAPI';
import { push } from "connected-react-router";


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
        return request.get(`/3/movie/now_playing?api_key=9ba639c7c8d42e4b827058a99fb728e5&language=en-US`).then(response => {
            // console.log(response.data.results)
            dispatch(loadDataSuccess(response.data.results))
        }).catch(err => {
            console.log(err);
            dispatch(loadDataFailure())
        })
    }
}

const loadDetailSuccess = detail => {
    return {
        type: LOAD_DETAIL_SUCCESS, detail
    }
}

const loadDetailFailure = () => {
    return {
        type: LOAD_DETAIL_FAILURE
    }
}

export const loadDetail = (id) => {
    return dispatch => {
        return request.get(`/3/movie/${id}?api_key=9ba639c7c8d42e4b827058a99fb728e5&language=en-US`).then(response => {
            // console.log('response', response);
            dispatch(loadDetailSuccess(response.data))
            dispatch(push(`detail/`))
        }).catch(err => {
            console.log(err)
            dispatch(loadDetailFailure())
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
            // console.log('index-image', response.data.images);
            dispatch(loadImageSuccess(response.data.images))
        }).catch(err => {
            console.log(err);
            dispatch(loadImageFailure())
        })
    }
}

const loadRecommendationSuccess = recommendation => {
    return {
        type: LOAD_RECOMMENDATION_SUCCESS, recommendation
    }
}

const loadRecommendationFailure = () => {
    return {
        type: LOAD_RECOMMENDATION_FAILURE
    }
}

export const loadRecommendation = (id) => {
    return dispatch => {
        return request.get(`/3/movie/${id}/recommendations?api_key=9ba639c7c8d42e4b827058a99fb728e5&language=en-US`).then(response => {
            console.log(response.data.results)
            dispatch(loadRecommendationSuccess(response.data.results))
        }).catch(err => {
            console.log(err);
            dispatch(loadRecommendationFailure())
        })
    }
}

