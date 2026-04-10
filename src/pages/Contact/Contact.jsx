import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ContactBanner from '../../components/ContactBanner/ContactBanner'
import ContactForm from '../../components/ContactForm/ContactForm'

const Contact = () => {
  return (
    <>
      <Header />
        <ContactBanner />
        <ContactForm />
      <Footer />
    </>
  )
}

export default Contact
