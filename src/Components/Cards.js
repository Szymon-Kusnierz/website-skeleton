import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
return (
        <div className='cards'>
            <h1>This is title text</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/img-9.jpg'
                            text='This is text This is text This is text This is text'
                            label='this is label'
                            path='/services'
                        />
                        <CardItem 
                            src='images/img-2.jpg'
                            text='This isis is text'
                            label='this is label'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards