import '../style/Banner.css'
import hero from '../images/hero_img.png'
function Banner() {
  return (
    <div className='banner'>
      <div className="text-content">
        <p>__OUR BESTSELLERS</p>
        <h1>Latest Arrivals</h1>
        <a href="/">SHOP NOW__</a>
      </div>
      <div className="image-content">
        <img  src={hero} alt="Latest Arrivals" />
      </div>
    </div>
  )
}

export default Banner