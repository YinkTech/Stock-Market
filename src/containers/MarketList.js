import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { Market } from '../components/Market';
import { setMarket } from '../redux/actions/action';

export const MarketList = () => {
  const dispatch = useDispatch();

  const fetchMarket = async () => {
    const response = await axios
    .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .catch((err) => {
      console.log("err", err);
    });
    
    dispatch(setMarket (response.data));
    
  };

  useEffect(() => {
    fetchMarket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
       <Market />
    </div>
  )
}

