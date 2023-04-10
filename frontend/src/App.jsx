import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from './scene/homePage/index.jsx'
import Login from "./scene/loginPage/index.jsx"
import "./index.css"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
