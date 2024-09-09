import { assets } from '../assets/assets'
import '../style/Subscribe.css'
function Subscribe() {
  return (
    <div>
    <div className='second'>
      <h3>Subscribe now & get 20% off</h3>
      <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit" >SUBSCRIBE</button>
      </form>
    </div>
    </div>
  )
}

function Policy(){
  return(
    <div>
      <div className='section'>
      <div className='iconns'>
      <div className='first'>
        <img src={assets.exchange_icon} alt="exchange" />
        <p>Easy Exchange Policy</p>
        <p>We offer hassle free exchange policy</p>
      </div>
      <div className='first' id='second-icon'>
      <img src={assets.quality_icon} alt="quality" />
        <p>7 Days Return Policy</p>
        <p>We provide 7 days free return policy</p>
      </div>
      <div className='first'>
      <img src={assets.support_img} alt="support"/>
        <p>Best customer support</p>
        <p>we provide 24/7 customer support</p>
      </div>
    </div>
    </div>
    <Subscribe />
    </div>
    
  )
}

export {Subscribe, Policy}
