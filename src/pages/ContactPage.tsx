import ContactHero from '../components/ContactComp/ContactHero'
import ContactFrom from '../components/ContactComp/ContactFrom'
import FaqLandingPage from '../components/ContactComp/Faqs'
import SEOAdjust from '../components/SEOAdjust'

const ContactPage = () => {
    return (
        <>
            <SEOAdjust title='About Us' description='About Us Page' />
            <ContactHero />
            <ContactFrom />
            <FaqLandingPage />
        </>
    )
}

export default ContactPage
