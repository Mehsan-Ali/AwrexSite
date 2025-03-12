import ContactHero from '../components/ContactComp/ContactHero'
import ContactFrom from '../components/ContactComp/ContactFrom'
import FaqLandingPage from '../components/ContactComp/Faqs'
import SEOAdjust from '../components/SEOAdjust'

const ContactPage = () => {
    return (
        <>
            <SEOAdjust
                title="Contact Us | Custom Software Development & IT Solutions | AWREX"
                description="Get in touch with AWREX for custom software development, web and app development, system design, and DevOps solutions. Let's build innovative digital products together."
            />

            <ContactHero />
            <ContactFrom />
            <FaqLandingPage />
        </>
    )
}

export default ContactPage
