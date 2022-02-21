import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, style, size}) => {
    const checkStyle = STYLES.includes(style) ? style : STYLES[0]

    const checkSize = SIZES.includes(size) ? size : STYLES[0]

    return (
        <Link to='sign-up' className='btn-mobile'>
            <button
                className={`btn ${checkStyle} ${checkSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
}