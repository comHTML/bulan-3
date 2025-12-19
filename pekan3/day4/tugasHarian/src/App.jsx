import './App.css'

import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'
import Dashboard from './pages/Dashboard'
import DashboardProfile from './pages/DashboardProfile'
import DashboardSettings from './pages/DashboardSettings'

function App() {
 

  return (
    <>
      <div>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/about">About</NavLink> |{" "}
        <NavLink to="/contact">Contact</NavLink> |{" "}
        <NavLink to="/products/1">Product</NavLink> |{" "}
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productId" element={<ProductDetail />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
