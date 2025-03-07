import React from 'react'
import AboutHero from '../components/AboutComp/AboutHero'
import AboutHeader from '../components/AboutComp/AboutHeader'
import ModernAbout from '../components/AboutSec'
import WhyChooseUs from '../components/AboutComp/WhyChooseUs'
import Timeline from '../components/Timeline'
import TestimonialsCarousel from '../components/Testimonials'
import CallToAction from '../components/AboutComp/CallToAction'

const AboutPage = () => {
    return (
        <div>
            <AboutHeader/>
            {/* <AboutHero/> */}
            <ModernAbout/>
            <WhyChooseUs/>
            <Timeline/>
            <TestimonialsCarousel/>
            <CallToAction/>
        </div>
    )
}

export default AboutPage
