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
            <SEOAdjust
                title="About Us | Custom Software Development & IT Solutions"
                description="Learn more about our expertise in custom software development, web and app development, system design, and DevOps. We deliver innovative IT solutions to drive your business growth."
            />

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
