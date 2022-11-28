import React from 'react'
import { NavBar } from '../components/NavBar'
import { App } from '../components/App'
import { Links } from './../components/Links';
import { Details } from '../components/Details'
import { Route, Routes } from 'react-router-dom'

export const SwitchRoutes = () => {
  return (
    <>
      <NavBar />
      <div className='d-md-flex'>
      <Links /> 
        <Routes>
          <Route path='/Stock-Market' element={<App />} exact />
          <Route path='/Details/:marketId' element={<Details />} />
          <Route>404 not Found! </Route>
        </Routes>
      </div>
    </>
  )
}

