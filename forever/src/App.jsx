import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Collection from './pages/Collection'

function App() {
  return (
    <div style={{ margin: '20px 137px'}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/collection' element={<Collection />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App