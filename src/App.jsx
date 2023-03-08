import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom'

import useAuthContext from './hooks/useAuthContext'

// components
import Navbar from './components/Navbar'

// pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  const { authIsReady } = useAuthContext()

  return (
    <>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
