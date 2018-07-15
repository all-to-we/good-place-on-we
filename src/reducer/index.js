import { combineReducers } from 'redux'
import {
  routerReducer,
} from 'react-router-redux'
import AuthReducer from "./auth/auth.reducer";

export default combineReducers({
  routerReducer,
  auth: AuthReducer,
})
