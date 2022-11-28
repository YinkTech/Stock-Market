import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMarket, removeSelectedMarket } from '../redux/actions/action';
import './../styles/details.css'

export const Details = () => {
  const market = useSelector((state) => state.selectedMarketReducer);
  const {image, name, symbol, sentiment_votes_up_percentage, sentiment_votes_down_percentage, market_cap_rank, last_updated, community_score, liquidity_score, public_interest_score, genesis_date, description, community_data, links} = market;
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
      dispatch(removeSelectedMarket());
    };
  }, [marketId])

  return (
    <div className='details'>
      <div className=''>
        {Object.keys(market).length === 0 ? (
          <div className='text-info mx-5 fs-2 text-uppercase'>loading</div>
              ) : (
          <div className='d-md-flex justify-content-between'>
            <div className='det-first-sec'>
              <Link to='/'>
                <button className="btn text-info d-block fw-bolder fs-3 px-2 py-0 text-capitalize"> <i className="bi bi-skip-backward"></i> </button>
              </Link>
              <hr className='separator' />
              <div className='p-2'>
                <div className='mb-5 px-3 d-flex align-items-center'>
                <img src={image.large} alt="img" className='img-fluid details-img m-2' />
                  <div className='d-flex fs-1 flex-column'>
                    <span className='text-warning'>{name}</span>
                    <span className='text-muted'>{symbol}</span>
                  </div>
                </div>

                <div className='px-2 mt-5'>
                  <div className=''>
                    <h3 className='fw-bolder fs-3'>
                      Key <span className='def-color'>Statistics</span> 
                    </h3>
                    <div className='text-center p-2'>
                      <div className='mb-4 mx-3 market-row p-3 shadow text-success'>
                        <span className='info'>sent votes up </span>
                        <span>{sentiment_votes_up_percentage}</span>
                      </div>
                      <div className=' mb-4 mx-3 market-row p-3 shadow text-danger'>
                        <span className='info d-inline-block'>sent votes down </span>
                        <span>{sentiment_votes_down_percentage}</span>
                      </div>
                      <div className=' mb-4 mx-3 market-row p-3 shadow'>
                        <span className='info'>Market Rank </span>
                        <span>{market_cap_rank}</span>
                      </div>
                      <div className=' mb-4 mx-3 market-row p-3 shadow text-info'>
                        <span className='info'>Community Score</span>
                        <span>{community_score}</span>
                      </div>

                        <hr className='separator' />

                      <div className=' mb-4 mx-3 market-row p-3 shadow text-primary'>
                        <span className='info'>liquidity Score </span>
                        <span>{liquidity_score}</span>
                      </div>
                      <div className=' mb-4 mx-3 market-row p-3 shadow text-warning'>
                        <span className='info'> Public Interest Sscore </span>
                        <span>{public_interest_score}</span>
                      </div>
                      <div className=' mb-4 mx-3 market-row p-3 shadow'>
                        <span className='info'>Last Update </span>
                        <span>{last_updated}</span>
                      </div>
                      <div className='mb-4 mx-3 market-row p-3 shadow text-info'>
                        <span className='info'>genesis_date</span>
                        <span>{genesis_date}</span>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <h3 className='fw-bolder text-muted fs-3'>
                      Social
                    </h3>

                    <div className=' text-muted my-2'>
                      <div className='text-capitalize w-100 justify-content-between d-inline-flex'>
                        <span><i className="bi bi-code-slash"></i><i className="bi bi-code-slash"></i><i className="bi bi-code-slash"></i></span>
                        <span className='text-end'>subscriber</span>
                        <span>Link</span>
                      </div>
                      <div className='text-capitalize w-100 justify-content-between d-inline-flex'>
                        <span>twitter</span>
                        <span className='text-end'>{community_data.twitter_followers}</span>
                        <span><a href='https://twitter.com/{links.twitter_screen_name}'><i className="bi bi-twitter"></i></a></span>
                      </div>
                      <div className='text-capitalize w-100 justify-content-between d-inline-flex'>
                        <span>reddit</span>
                        <span className='text-end'>{community_data.reddit_subscribers}</span>
                        <span><a href='https://reddit.com/{links.reddit_screen_name}'><i className="bi bi-reddit"></i></a></span>
                      </div>
                      <div className='text-capitalize w-100 justify-content-between d-inline-flex'>
                        <span>Facebook</span>
                        <span className='text-end'>{community_data.facebook_likes}</span>
                        <span><a href='https://facebook.com/{links.facebook_screen_name}'><i className="bi bi-facebook"></i></a></span>
                      </div>
                      <div className='text-capitalize w-100 justify-content-between d-inline-flex'>
                        <span>homepage</span>
                        <span><a href={links.homepage[0]}><i className="bi bi-link"></i></a></span>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='aside-detail p-2'>
              <h4 className='fs-3 fw-bolder'>Coin Profile</h4>
              <h6 className='text-info sr-only sr-only-focusable'>{name}</h6>
              <p className='details-text' > {description.en} </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
