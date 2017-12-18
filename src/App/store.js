import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { localStorageMiddleware } from './utils/middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(
  		thunk, 
  		localStorageMiddleware
  	)
));

export default store