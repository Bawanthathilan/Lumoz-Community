import React from 'react'
import './Hero.css'
import Logo from '../assets/logo-light.png'

function Hero() {
  return (
    <div>
      <nav class='navbar sticky-top navbar-dark bg-dark'>
        <a class='navbar-brand' href='#'>
          <img
            src={Logo}
            className='lumoz-logo'
            width='105'
            height='30'
            alt=''
          />
        </a>
      </nav>

      <section class='hero'>
        <div class='container'>
          <div class='left-col'>
            <p class='subhead'>Lumoz Community</p>
            <h1>Explore Models made just for Lumoz</h1>
            <p className='subhead-lumoz'>
              Explore and Download thousands of 3D Models
            </p>

            <div class='hero-cta'>
              <a href='www.lumoz.studio' class='primary-cta'>
                Try Lumoz for free
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
