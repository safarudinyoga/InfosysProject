import {
	LOAD_DATA_SUCCESS,
	LOAD_DATA_FAILURE,
	LOAD_IMAGE_SUCCESS,
	LOAD_IMAGE_FAILURE,
	LOAD_DETAIL_SUCCESS,
	LOAD_DETAIL_FAILURE,
	LOAD_RECOMMENDATION_SUCCESS,
	LOAD_RECOMMENDATION_FAILURE,
	EDIT_ON,
	EDIT_OFF,
	MOVIE_SELECTED,
	MOVIE_DESELECTED
} from '../constants/constant';
import { request } from '../helpers/accessAPI';
import { push } from 'connected-react-router';

const loadDataSuccess = (movie) => ({
	type: LOAD_DATA_SUCCESS,
	movie
});

const loadDataFailure = () => ({
	type: LOAD_DATA_FAILURE
});

export const loadData = () => async (dispatch) => {
	try {
		const { data } = await request.get(
			`/3/movie/now_playing?api_key=9ba639c7c8d42e4b827058a99fb728e5&language=en-US`
		);
		dispatch(loadDataSuccess(data.results));
	} catch (err) {
		console.log(err);
		dispatch(loadDataFailure());
	}
};

const loadDetailSuccess = (detail) => ({
	type: LOAD_DETAIL_SUCCESS,
	detail
});

const loadDetailFailure = () => ({
	type: LOAD_DETAIL_FAILURE
});

export const loadDetail = (id) => async (dispatch) => {
	try {
		const { data } = await request.get(`/3/movie/${id}?api_key=9ba639c7c8d42e4b827058a99fb728e5&language=en-US`);
		dispatch(loadDetailSuccess(data));
		dispatch(push(`/detail`));
	} catch (err) {
		console.log(err);
		dispatch(loadDetailFailure());
	}
};

const loadImageSuccess = (image) => ({
	type: LOAD_IMAGE_SUCCESS,
	image
});

const loadImageFailure = () => {
	return {
		type: LOAD_IMAGE_FAILURE
	};
};

export const loadImage = () => async (dispatch) => {
	try {
		const { data } = await request.get(`/3/configuration?api_key=9ba639c7c8d42e4b827058a99fb728e5`);
		dispatch(loadImageSuccess(data.images));
	} catch (err) {
		console.log(err);
		dispatch(loadImageFailure());
	}
};

const loadRecommendationSuccess = (recommendation) => ({
	type: LOAD_RECOMMENDATION_SUCCESS,
	recommendation
});

const loadRecommendationFailure = () => ({
	type: LOAD_RECOMMENDATION_FAILURE
});

export const loadRecommendation = (id) => async (dispatch) => {
	try {
		const { data } = await request.get(
			`/3/movie/${id}/recommendations?api_key=9ba639c7c8d42e4b827058a99fb728e5&language=en-US`
		);
		console.log(data.results);
		dispatch(loadRecommendationSuccess(data.results));
	} catch (err) {
		console.log(err);
		dispatch(loadRecommendationFailure());
	}
};

export const editOn = () => ({
	type: EDIT_ON
});

export const editOff = () => ({
	type: EDIT_OFF
});

export const movieSelected = (movie) => ({
	type: MOVIE_SELECTED,
	movie
});

export const movieDeselected = (movie) => ({
	type: MOVIE_DESELECTED,
	movie
});
