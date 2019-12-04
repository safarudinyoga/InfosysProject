import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import movie from './movie';
import image from './image';
import detail from './detail';
import recommendation from './recommendation';

export default history =>
    combineReducers({
        router: connectRouter(history), movie, image, detail, recommendation //,
    });

