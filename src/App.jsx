import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import 404 from './pages/404'
import { Routes, Route } from 'react-router-dom'  

function App() {

  return (
    <div className={styles.app}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pizza/p001" element={<Pizza />} />
      <Route path="/*" element={<404 />} />
    </Routes>
    <Footer/>
   
    </>
  )
}

export default App
