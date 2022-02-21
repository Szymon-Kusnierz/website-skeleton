import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the footer adventure my friends
                </p>
                <p className='footer-subscription-text'>
                    follow me as well
                </p>
                <div className='input-areas'>
                    <form>
                        <input className='footer-input' type='email' name='email' placeholder='Your Email'/>
                        <Button style='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How It Works</Link>
                        <Link to='/'>Testimonials</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How It Works</Link>
                        <Link to='/'>Testimonials</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/sign-up'>How It Works</Link>
                        <Link to='/'>Testimonials</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='social-icons'>
                        <Link className='social-icon-link' to='/' target='_blank' aria-label='Facebook'>
                            <FontAwesomeIcon icon="fab fa-facebook-f"/>
                        </Link>
                        <Link className='social-icon-link' to='/' target='_blank' aria-label='Instagram'>
                            <FontAwesomeIcon icon="fab fa-instagram"/>
                        </Link>
                        <Link className='social-icon-link' to='/' target='_blank' aria-label='Twitter'>
                            <FontAwesomeIcon icon="fab fa-twitter"/>
                        </Link>
                        <Link className='social-icon-link' to='/' target='_blank' aria-label='YouTube'>
                            <FontAwesomeIcon icon="fab fa-youtube"/>
                        </Link>
                    </div>
                    <small className='website-rights'>WEB © 2022</small>
                </div>
            </section>
        </div>
    )
}

export default Footer