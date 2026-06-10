import { useState } from 'react'
import { FiMenu, FiSearch, FiShoppingCart, FiUser, FiUsers } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '../store/productsSlice'
import './Navbar.scss'

export default function Navbar() {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()

  function onChange(e) {
    const v = e.target.value
    setTerm(v)
    // dispatch on every change so listing filters live as typing
    dispatch(setSearchQuery(v))
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <button className="nav-menu-btn" aria-label="Menu">
          <FiMenu size={22} color="#fff" />
        </button>

        <div className="nav-search">
          <button className="search-icon" aria-hidden>
            <FiSearch size={16} />
          </button>
          <input
            type="text"
            placeholder="Search products..."
            value={term}
            onChange={onChange}
          />
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