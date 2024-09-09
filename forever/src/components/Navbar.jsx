import '../style/Navbar.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <img src={assets.logo} alt='logo icon'/>
      </div>
      <ul className='nav-links'>
        <li className='item'><Link to='/'>Home</Link></li>
        <li className='item'><Link to='/collection'>Collection</Link></li>
        <li className='item'><Link to='/about'>About</Link></li>
        <li className='item'><Link to='/contact'>Contact</Link></li>
        <li className='admin-pannel'><Link to='/admin'><button>Admin Pannel</button></Link></li>
      </ul>
      <div className="icons">
        <img src={assets.search_icon} alt="search" />
        <Link to='/login'><img src={assets.profile_icon} alt="user" /></Link>
        <img src={assets.cart_icon} alt="cart" />
      </div>
    </nav>
  )
}

export default Navbar
