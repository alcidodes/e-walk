import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './main.css'

import Home from './components/home/Home'
import Bugs from './components/bugs/Bugs'
import Music from './components/music/Music'
import Recipes from './components/recipes/Recipes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bugs" element={<Bugs />} />
        <Route path="/music" element={<Music />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
