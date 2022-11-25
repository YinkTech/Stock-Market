import { combineReducers } from 'redux';
import { marketReducer, selectedMarketReducer } from "./reducer";

export const rootReducer = combineReducers({
  marketReducer,
  selectedMarketReducer,
});

 

