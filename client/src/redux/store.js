import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import imageReducer from './reducer';

const rootReducer = combineReducers({
  image: imageReducer
});

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
