import React from 'react'
import '../style/Hero.css'
import hero from '../images/hero_img.png'
function Hero() {
  return (
    <div className='hero'>
      <div className="text-content ">
        <p>───── OUR BESTSELLERS</p>
        <h1>Latest Arrivals</h1>
        <a href="/">SHOP NOW ────</a>
      </div>
      <div className="image-content">
        <img  src={hero} alt="Latest Arrivals" />
      </div>
    </div>
  )
}

export default Hero
