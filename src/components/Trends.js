import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Trends = () => {
  const coins = useSelector((state) => state.trendReducer.coin);
  const renderTlist = coins.map((coin) => {
    const formatToCurr = amount => {
        return "$ " + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    };
    const { id, large, name, symbol , price_btc, score } = coin.item;
      
    return (
        <div key={id} className='mb-4 mx-3 market-row p-3 shadow'>
            <Link className='text-white text-decoration-none' to={`/Details/${id}`} >
              <div>
                <div className='market-cont'>
                    <div className='d-flex mb-1'>
                      <img src={large} alt="logo" className='coin-img img-fluid  mx-2 me-5' />
                      <div className=' d-flex flex-column'><b>{name}</b> <b className='text-info'>[{symbol}]</b></div>
                    </div>
                    <div className='px-4 mt-2 py-2 text-center'>
                      <span className='d-flex align-items-center justify-content-between'>Today's Price <small className='text-color'><i className="bi bi-arrow-up-right"></i> {formatToCurr(price_btc)}</small></span>
                        <hr className='separator' />
                        <span className='d-flex align-items-center justify-content-between'>Score <small className='text-warning'> {score}</small></span>
                      </div>
                </div>
              </div>
            </Link>
        </div>
    );
  });

  return <>{renderTlist}</>
};



