import { FiMenu, FiSearch, FiShoppingCart, FiUser, FiUsers } from 'react-icons/fi'
import './Navbar.scss'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <button className="nav-menu-btn" aria-label="Menu">
          <FiMenu size={22} color="#fff" />
        </button>

        <div className="nav-search">
          <FiSearch size={16} />
          <input type="text" placeholder="Search products..." />
        </div>

        <div className="nav-icons">
          <button aria-label="Cart"><FiShoppingCart size={22} /></button>
          <button aria-label="Account"><FiUser size={22} /></button>
          <button aria-label="Profile"><FiUsers size={22} /></button>
        </div>

      </div>
    </nav>
  )
}