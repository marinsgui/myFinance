import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
