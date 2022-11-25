import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMarket, removeSelectedMarket } from '../redux/actions/action';

export const Details = () => {
  const market = useSelector((state) => state.selectedMarketReducer);
  const {image, name, market_cap_rank, symbol, sentiment_votes_down_percentage, last_updated, description} = market;
  const { marketId } = useParams();
  const dispatch = useDispatch();

  const fetchMarketDetail = async() => {
    const response = await axios
    .get(`https://api.coingecko.com/api/v3/coins/${marketId}?localization=false&tickers=false&market_data=false&community_data=true&developer_data=false&sparkline=false`)
    .catch((err) => {
      console.log("Err ", err);
    });
    dispatch (selectedMarket(response.data));
  };

  useEffect(() => {
    if (marketId && marketId !== "" ) fetchMarketDetail();
    return () => {
      dispatch(removeSelectedMarket);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marketId])

  return (
    <div className='ui grid container'>
      
      {Object.keys(market).length === 0 ? (
        <div>loading</div>
      ) : (
        <div>
          <span>{market_cap_rank}</span>
          <span>{name}</span>
          <span>{symbol}</span>
          <img src={image.large} alt="img" className='ui card img' />
          <span>{sentiment_votes_down_percentage}</span>
          <span>{last_updated}</span>
          <span>{description.en}</span>
        </div>
      )}
    </div>
  );
};

