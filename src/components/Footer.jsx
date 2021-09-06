import React from 'react'
import './Footer.css'
import Logo from '../assets/logo.png'

function Footer() {
  return (
    <div>
      <footer class='footer-section'>
        <div class='container'>
          <div class='footer-content pt-5 pb-5'>
            <div class='row'>
              <div class='col-xl-4 col-lg-4 mb-50'>
                <div class='footer-widget'>
                  <div class='footer-logo'>
                    <a href='index.html'>
                      <img src={Logo} class='img-fluid' alt='logo' />
                    </a>
                  </div>
                  <div class='footer-text'>
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div class='footer-social-icon'>
                    <span>Follow us</span>
                    <a href='#'>
                      <i class='fab fa-facebook-f facebook-bg'></i>
                    </a>
                    <a href='#'>
                      <i class='fab fa-twitter twitter-bg'></i>
                    </a>
                    <a href='#'>
                      <i class='fab fa-youtube google-bg'></i>
                    </a>
                    <a href='#'>
                      <i class='fab fa-instagram google-bg'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class='col-xl-4 col-lg-4 col-md-6 mb-30'>
                <div class='footer-widget'>
                  <div class='footer-widget-heading'>
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href='#'>Home</a>
                    </li>
                    <li>
                      <a href='#'>about</a>
                    </li>
                    <li>
                      <a href='#'>services</a>
                    </li>

                    <li>
                      <a href='#'>Contact</a>
                    </li>
                    <li>
                      <a href='#'>About us</a>
                    </li>

                    <li>
                      <a href='#'>Expert Team</a>
                    </li>
                    <li>
                      <a href='#'>Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-xl-4 col-lg-4 col-md-6 mb-50'>
                <div class='footer-widget'>
                  <div class='footer-widget-heading'>
                    <h3>Subscribe</h3>
                  </div>
                  <div class='footer-text mb-25'>
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div class='subscribe-form'>
                    <form action='#'>
                      <input type='text' placeholder='Email Address' />
                      <button>
                        <i class='fab fa-telegram-plane'></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='copyright-area'>
          <div class='container'>
            <div class='row'>
              <div class='col-xl-6 col-lg-6 text-center text-lg-left'>
                <div class='copyright-text '>
                  <p>
                    Copyright &copy; 2018, All Right Reserved{' '}
                    <a href='https://lumoz.studio'>Lumoz Studio</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
