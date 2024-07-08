import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.HungryHubLogo_Transparent_Logo} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam odio iure enim quam magni animi veniam eius ullam accusamus, ducimus rerum numquam vitae, quis aliquam?</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-middle">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8861598892</li>
            <li>sumanthspoojary58@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">Copyright 2024 © HungryHub.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
