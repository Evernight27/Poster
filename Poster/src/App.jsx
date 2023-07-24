import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/navbar' element={<Navbar />} />
        </Routes>
      </Router></>
  )

}

export default App
