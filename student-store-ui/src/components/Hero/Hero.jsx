import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <div className="hero">
        <h2 className='intro'> Welcome!</h2>
        <h1>Find Your Merch!</h1>
        <p>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
        <img className='hero-img'></img>
    </div>
  )
}

export default Hero