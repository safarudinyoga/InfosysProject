import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import movie from './movie';
import image from './image';
import detail from './detail';
import recommendation from './recommendation';
import service from './service';

export default (history) =>
	combineReducers({
		router: connectRouter(history),
		movie,
		image,
		detail,
		recommendation,
		service //,
	});
