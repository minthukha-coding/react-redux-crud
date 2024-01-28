import React from 'react'
import Home from './page/Home'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Create from './page/Create'
import Update from './page/Update'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/edit/:id' element={<Update/>}></Route>
      </Routes>
    </Router>
  )
}

export default App