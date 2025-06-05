import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

import todos from './todos'


const persistData = {
  key: 'data',
  storage
}


const reducer = combineReducers({
  todos: persistReducer(persistData, todos)
})


export default reducer
