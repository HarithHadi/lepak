import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import Home from './pages/Home'
import WordGame from './pages/WordGame'
import Mafia from './pages/Mafia'

import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/WordGame" element={<WordGame />} />
        <Route path="/Mafia" element={<Mafia />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
