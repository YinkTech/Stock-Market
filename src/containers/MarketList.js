import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import Market from '../components/Market';
import { setMarket } from '../redux/actions/action';
import Filter from '../components/Filter';

export const MarketList = () => {
  const dispatch = useDispatch();

  const handleFilter = (pageNumber) => {
    return (fetchMarket(pageNumber));
  };


  const fetchMarket = async (pageNumber, pageSize=50) => {
    const response = await axios
    .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${pageSize}&page=${pageNumber}&sparkline=false`)
    .catch((err) => {
      console.log("err", err);
    });
    dispatch(setMarket (response.data));
  };
  useEffect(() => {
    fetchMarket();
  }, []);

  return (
      <div className='p-2 text-center'>
        <h4 className='lead-text mb-4'>Coins List </h4>
        <Filter className="mb-2" handleFilter={handleFilter} />
       <Market />
    </div>
  )
}
