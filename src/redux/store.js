// Necessities and accessories for constructing our Redux store;
import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Individual reducers altogether under an alias;
import rootReducer from './root-reducer';

// Construct our Redux store;
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware.withExtraArgument({ axios }), logger)
);
const store = createStore(rootReducer, middleware);

// Export our store by default, which will be provided to and injected within our entire application;
export default store;
