import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from './Component/Registration'

function App() {
  return (
   <Routes>
   
   <Route path='' element = {<Registration/>}/>
   
   </Routes>
  )
}

export default App