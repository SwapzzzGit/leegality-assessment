import { useState } from 'react'
import { FiMenu, FiSearch, FiShoppingCart, FiUser, FiUsers } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '../store/productsSlice'
import './Navbar.scss'

export default function Navbar() {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()

  function submitSearch() {
    dispatch(setSearchQuery(term))
  }

  function onKeyDown(e) {
    if (e.key === 'Enter') submitSearch()
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <button className="nav-menu-btn" aria-label="Menu">
          <FiMenu size={22} color="#fff" />
        </button>

        <div className="nav-search">
          <button className="search-icon" onClick={submitSearch} aria-label="Search">
            <FiSearch size={16} />
          </button>
          <input
            type="text"
            placeholder="Search products..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onKeyDown={onKeyDown}
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