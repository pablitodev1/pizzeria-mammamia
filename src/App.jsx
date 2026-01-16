import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Notfound from './pages/Notfound'
import { Routes, Route } from 'react-router-dom'
import styles from './assets/App.module.css';

function App() {

  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/*" element={<Notfound />} />
          <Route path="/404" element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
