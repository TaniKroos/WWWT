import { useState } from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/shared/navigation/Navigation'
import Register from './pages/Register/Register'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App