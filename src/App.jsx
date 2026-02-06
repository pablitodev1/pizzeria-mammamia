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
import { Navigate, Routes, Route } from 'react-router-dom'
import styles from './assets/App.module.css';
import { CartProvider } from './assets/context/CartContext'
import { UserProvider, UserContext } from './assets/context/UserContext';
import { useContext } from 'react';

function AppContent() {
  const { token } = useContext(UserContext);

  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={token ? <Navigate to="/" /> : <Register />} />
          <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {

  return (
    <UserProvider>
    <CartProvider>
      <AppContent />
    </CartProvider>
    </UserProvider>

  )
}

export default App
