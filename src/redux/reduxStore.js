import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import shoppingCartReducer from './reducers/shoppingCartReducer'
import currentStoreReducer from './reducers/currentStoreReducer'

const reducer = combineReducers({
  user: userReducer,
  shoppingCart: shoppingCartReducer,
  currentStore: currentStoreReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

export default store
