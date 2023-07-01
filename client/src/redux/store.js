import { configureStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import imageReducer from './imageReducer';
import authReducer from './authReducers';

const rootReducer = combineReducers({
  image: imageReducer,
  auth: authReducer,
});

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
