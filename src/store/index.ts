import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import APIMiddleware from '../common/middlewares/APIMiddleware';

import logReducer from './log/reducer';

const rootReducer = combineReducers({
    log: logReducer,
    
});

const createStoreWithMiddleware = applyMiddleware(thunk, APIMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
