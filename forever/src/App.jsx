
import {Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Collection from './pages/Collection'
import Footer from './components/Footer'
import Login from './pages/Login'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
    
  )
}

export default App