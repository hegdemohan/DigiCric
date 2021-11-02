import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './components/reducers/RootReducer';

const initialState = {};
const env = process.env.NODE_ENV;
const middleware = env === 'development' ? [thunk, logger] : [thunk];
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);
const store = env === 'development' ? createStore(rootReducer, initialState, enhancer) : createStore(rootReducer, initialState, enhancer);

export default store;