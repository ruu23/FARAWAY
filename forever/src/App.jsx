import Navbar from './Navbar';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Navbar /> {}
        <Routes>
          <Route path='/about' element={<h1>This is the About page</h1>} />
          <Route path='/home' element={<h1>This is the Home page</h1>} />
          <Route path='/contact' element={<h1>This is the Contact page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
