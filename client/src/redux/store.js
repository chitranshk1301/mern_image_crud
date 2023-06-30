import { configureStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import imageReducer from './reducers';

const rootReducer = combineReducers({
  image: imageReducer,
});

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
