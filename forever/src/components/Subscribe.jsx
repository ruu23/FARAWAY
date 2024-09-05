import exchange from "../images/exchange_icon.png"
import quality from '../images/quality_icon.png'
import support from '../images/support_img.png'

function Subscribe() {
  return (
    <>
    <div className="flex justify-center space-x-4">
      <div>
        <img src={exchange} alt="exchange" />
        <p>Easy Exchange Policy</p>
        <p>We offer hassle free exchange policy</p>
      </div>
      <div>
      <img src={quality} alt="return" />
        <p>7 Days Return Policy</p>
        <p>We provide 7 days free return policy</p>
      </div>
      <div>
      <img src={support} alt="support"/>
        <p>Best customer support</p>
        <p>we provide 24/7 customer support</p>
      </div>
    </div>
    <div className="bg-gray-100 p-4 rounded-md">
      <h3 className="text-lg font-bold mb-2">Subscribe now & get 20% off</h3>
      <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
      <form className="flex">
        <input type="email" className="flex-1 border rounded-md p-2" placeholder="Enter your email" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">SUBSCRIBE</button>
      </form>
    </div>
    </>
  )
}

export default Subscribe
