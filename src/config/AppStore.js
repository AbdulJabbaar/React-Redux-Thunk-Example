import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import CombineReducers from './CombineReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const appStore = createStore(
    CombineReducers,
    composeEnhancers(applyMiddleware(ReduxThunk))
);
