import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import About from './About.jsx'
import Books from './Books.jsx'
import Notfound from './Notfound.jsx'
import Book from './Book.jsx'
import Home from './Home.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<Notfound />} />
          <Route path='/Books' element={<Books />}>
            <Route path=":bookId" element={<Book />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode >,
)
