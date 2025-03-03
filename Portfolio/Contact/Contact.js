import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from '@mui/material'
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import './Contact.css'

const Contact = () => {
    return (
        <Element className='contact' id='contact'>
            <h1>Contact</h1>
            <div className='contact__container'>
                <p>
                    Email: <span>sarumathis058@gmail.com</span>
                </p>
                <p>
                    GitHub Username: <span>sarumathiselvam</span>  
                </p> 
                <div className='contact__icon'>
                    <a href='google.com'>
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                    </a>
                    <a href='google.com'>
                        <IconButton>
                            <Facebook />
                        </IconButton>
                    </a>
                    <a href='google.com'>
                        <IconButton>
                            <Instagram />
                        </IconButton>
                    </a>
                </div>
            </div>
        </Element>
    )
}

export default Contact

// GitHub Username: <span>sarumathiselvam</span> : dupicate it will change after GitHub create//