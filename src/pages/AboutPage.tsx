import AboutHeader from '../components/AboutComp/AboutHeader'
import ModernAbout from '../components/AboutSec'
import WhyChooseUs from '../components/AboutComp/WhyChooseUs'
import Timeline from '../components/Timeline'
import TestimonialsCarousel from '../components/Testimonials'
import CallToAction from '../components/AboutComp/CallToAction'
import SEOAdjust from '../components/SEOAdjust'

const AboutPage = () => {
    return (
        <>
            <SEOAdjust title='About Us' description='About Us Page' />
            <AboutHeader />
            {/* <AboutHero/> */}
            <ModernAbout />
            <WhyChooseUs />
            <Timeline />
            <TestimonialsCarousel />
            <CallToAction />
        </>
    )
}

export default AboutPage
