import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { BrowserRouter } from 'react-router-dom'
import { SwitchRoutes } from './containers/SwitchRoutes'
import './styles/mediaquery.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>   
      <Provider store={store}>
        <SwitchRoutes />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
