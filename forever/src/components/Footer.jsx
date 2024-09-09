import{ assets } from '../assets/assets'
import '../style/Footer.css'
function Footer() {
  return (
    <footer >
      <div >
        <div className='base'>

          <div className='one'>
            <img src={assets.logo} />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the<br/> 1500s, when an unknown printer took a galley of type and scrambled it to<br/> make a type specimen book.</p>
          </div>
          
            <div className='company'>
              <h2>COMPANY</h2>
              <ul >
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Delivery</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            <div className='contact'>
              <h2>GET IN TOUCH</h2>
              <ul>
                <li><a href="tel:+1-000-000-0000" >+1-000-000-0000</a></li>
                <li><a href="mailto:greatstackdev@gmail.com">greatstackdev@gmail.com</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>

        </div>

        <div className='rights'>
          <p>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer

