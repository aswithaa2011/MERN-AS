import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRoute = () => {
  return (
   <>
   <Routes>

    <Route to="/products/1" > </Route>
        <Route to="/products/2" > </Route>

   </Routes>
   </>
  )
}

export default AppRoute
