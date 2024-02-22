import './App.css'
import {Routes, Route} from 'react-router-dom'; 
import React from 'react'
import {Home} from '../src/Home/Home';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App