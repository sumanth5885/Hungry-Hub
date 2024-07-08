import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='admin-logo'>
        <img className='logo' src={assets.logo} alt="" />
        <h3>ADMIN</h3>
      </div>
      <img className='profile' src="" alt="" />
    </div>
  )
}

export default Navbar
