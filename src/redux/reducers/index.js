import { combineReducers } from 'redux';
import { marketReducer, selectedMarketReducer, trendReducer } from "./reducer";

export const rootReducer = combineReducers({
  marketReducer,
  trendReducer,
  selectedMarketReducer,
});
