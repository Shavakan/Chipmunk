import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from './reducers';

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

// const devTools = process.env.NODE_ENV == "development";

const composeEnhancers = compose;

const configure = (preLoadedState: any) => createStore(
    reducers, preLoadedState, composeEnhancers(
        applyMiddleware(...middlewares)
    ));

export default configure;
