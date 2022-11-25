import { ActionTypes } from "../actions/action-types";

const inistialState = {
  markets: [],
};

export const marketReducer = (state = inistialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MARKETS:
      return {...state, markets:payload};  
    default:
      return state;
  };
};


export const selectedMarketReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELETED_MARKET:
      return {...state, ...payload};  
    case ActionTypes.REMOVE_SELETED_MARKET:
      return {};  
    default:
      return state;
  };
};
