import {
    LOAD_IMAGE_SUCCESS,
    LOAD_IMAGE_FAILURE
} from '../constants/constant';

const image = (state = {}, action) => {
    switch (action.type) {
        case LOAD_IMAGE_SUCCESS:
            // console.log('ini', action.image)
            return action.image

        case LOAD_IMAGE_FAILURE:
        default:
            return state
    }
}

export default image;