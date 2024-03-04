import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Logement from './pages/logement/Logement.jsx'
import Error from './pages/error/Error.jsx'
function App() {
  return (
    <BrowserRouter>
    <div>
    <Header />
    <Routes>
      <Route path ='/' element={<Home />} />
      <Route path ='/about' element={<About />} />
      <Route path ='/logement/:id' element={<Logement />} />
      <Route path ='*' element={<Error />} />
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  )
}

export default App