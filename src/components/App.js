import React from 'react';
import { TrendList } from '../containers/TrendList';
import { MarketList } from './../containers/MarketList';
import './../styles/main.css'


export const App = () => {
  return (
    <div className="App d-md-flex">
      <MarketList className=" p-2" />
      <TrendList />
    </div>
  );
}


       