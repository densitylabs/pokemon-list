import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

export default function configureStore() {
  let middleware = [thunk];
  if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, logger];
  }
  return createStore(reducer, applyMiddleware(...middleware));
}
