import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Market = () => {
  
  const markets = useSelector((state) => state.marketReducer.markets);
  const renderList = markets.map((market) => {
  const { id, image, name, market_cap, symbol , price_change_24h } = market;
    return (
      <div key={id}>
          <Link  to={`/Details/${id}`} >
            <div>
              <b>{id}</b>
              <b>{name}</b>
              <b>{symbol}</b>
              <b>{price_change_24h}</b>
              <img src={image} alt="logo" className='ui card' />
              <span>{market_cap}</span>
            </div>
          </Link>
       </div>
    );
  });

  return <>{renderList}</>
};



