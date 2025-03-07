import React from 'react'
import ContactHero from '../components/ContactComp/ContactHero'
import ContactFrom from '../components/ContactComp/ContactFrom'
import FaqLandingPage from '../components/ContactComp/Faqs'

const ContactPage = () => {
    return (
        <>
            <ContactHero />
            <ContactFrom/>
            <FaqLandingPage/>
        </>
    )
}

export default ContactPage
