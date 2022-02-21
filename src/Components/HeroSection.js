import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src='/videos/video-2.mp4' autoPlay loop muted */}
            <h1>Revnovations</h1>
            <p>Awaiting</p>
            <div className='hero-btns'>
                <Button className='btns' style='btn--outline' size='btn--large'>
                    Get Started
                </Button>
                <Button className='btns' style='btn--primary' size='btn--large'>
                    Contact Us <FontAwesomeIcon icon="fa-solid fa-phone" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection