import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import reducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger);

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
      reducer,
      applyMiddleware(thunk, promise, logger)
    );

    return store;
}
