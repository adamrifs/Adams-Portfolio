import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Modal from './components/Modal'

// export const serverUrl = import.meta.env.VITE_BACKEND_URL

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/modal' element={<Modal/>}/>
      </Routes>
    </div>
  )
}

export default App
