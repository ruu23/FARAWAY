import '../style/Navbar.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import search from '../images/search_icon.png'
import user from '../images/profile_icon.png'
import cart from '../images/cart_icon.png'

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-links">
        <li className='item'>
          <Link to="/">Home</Link>
        </li>
        <li className='item'>
          <Link to="/collection">Collection</Link>
        </li>
        <li className='item'>
          <Link to="/about">About</Link>
        </li>
        <li className='item'>
          <Link to="/contact">Contact</Link>
        </li>
        <li className="admin-pannel">
          <button>Admin Panel</button>
        </li>
      </ul>
      <div className="icons">
        <img src={search} alt="search" />
        <img src={user} alt="user" />
        <img src={cart} alt="cart" />
      </div>
    </nav>
  )
}

export default Navbar
