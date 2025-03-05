import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Home/></>}></Route>
        <Route path='/About' element={<><About/></>}></Route>
        <Route path='/Contact' element={<><Contact/></>}></Route>

        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App