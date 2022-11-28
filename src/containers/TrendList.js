import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { Trends } from '../components/Trends';
import { setTrends } from '../redux/actions/action';

export const TrendList = () => {
  const dispatch = useDispatch();
  const fetchTrends = async () => {
    const response = await axios
    .get("https://api.coingecko.com/api/v3/search/trending")
    .catch((err) => {
      console.log("err", err);
    });
    dispatch(setTrends (response.data.coins));
  };
  useEffect(() => {
    fetchTrends();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <div className='p-2 text-center trnds'>
        <h4 className='lead-sec-text mb-4'>Trending Coins List</h4>
       { <Trends /> }
    </div>
  )
}

