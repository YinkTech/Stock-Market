import React from 'react'
import { NavBar } from './NavBar'
import { App } from './App'
import { Details } from './Details'
import { Route, Routes } from 'react-router-dom'

export const SwitchRoutes = () => {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/Stock-Market' element={<App />} exact />
          <Route path='/Details' element={<Details />} />
        </Routes>
    </>
  )
}

