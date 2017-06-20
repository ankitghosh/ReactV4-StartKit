import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import listData from './listData'
import filterData from './filterData'
// const responseData = Object.assign({}, homeData, productData);
const rootReducer = combineReducers({
  	routing: routerReducer,
  	filterData,
  	listData
})

export default rootReducer
