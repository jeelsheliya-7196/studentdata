import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header/Header.jsx'
import About from './Componets/About/About.jsx';
import From from './Componets/From/From.jsx';
import Home from './Componets/Home/Home.jsx';
import { Route, Routes } from 'react-router';
import Card  from './Componets/Card/Card'
import Viewdata from './Componets/Viewdata/Viewdata.jsx';

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view' element={<Viewdata />}/>
      <Route path='/from' element={<From/>}/>
      {/* <Route path='/about/card' element={<Card/>}/> */}
    </Routes>
    </>
  )
}

export default App
