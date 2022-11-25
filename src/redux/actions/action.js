import { ActionTypes } from "./action-types";

export const setMarket = (markets) => {
  return {
    type: ActionTypes.SET_MARKETS,
    payload: markets,
  };
};

export const selectedMarket = (market) => {
  return {
    type: ActionTypes.SELETED_MARKET,
    payload: market,
  };
};

export const removeSelectedMarket = () => {
  return {
    type: ActionTypes.REMOVE_SELETED_MARKET,
  };
};