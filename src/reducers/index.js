import { combineReducers } from 'redux';
import images from './imageReducer';
import videos from './videoReducer';
import { ignoreActions } from 'redux-ignore';
import * as types from '../constants/actionTypes'

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  images:ignoreActions(images, [types.SHUTTER_VIDEOS_SUCCESS,types.SELECTED_VIDEO]), 
  videos:ignoreActions(videos, [types.SHUTTER_IMAGES_SUCCESS,types.SELECTED_IMAGE])
});

export default rootReducer;