import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Craft from './components/Craft'
import About from './components/About'
import MarketPlace from './components/MarketPlace'
import Artisans from './components/Artisans'
import Login from './components/Login'
import Profile from './components/Profile'
import PostCraftForm from './components/PostCraftForm'

function App() {
  return (
    <> 

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/crafts' element={<Craft />} />
      <Route path='/about' element={<About />} />
      <Route path='/marketplace' element={<MarketPlace />} />
      <Route path='/artisans' element={<Artisans/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/postcraftform' element={<PostCraftForm/>} />

    </Routes>


    </>
  )
}

export default App