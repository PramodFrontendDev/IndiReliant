import React from 'react'
import  "./ContactBanner.css"
import contactBanner from "../../assets/images/contact_banner.jpg"
import { Link } from 'react-router-dom'

const ContactBanner = () => {
  return (
    <>
      <section id='contact-banner-main'>
        <div className='contact-banner'>
            <img src={contactBanner} alt="banner image" />
        </div>
        <div className='contact-heading'>
            <div className='container'>
            <div className='heading'>
                <h2>Contact Us</h2>
                <ul>
                    <li>
                        <Link to="">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default ContactBanner
