import CallToAction from '../components/AboutComp/CallToAction'
import WhyChooseUs from '../components/AboutComp/WhyChooseUs'
import ModernAboutSection from '../components/AboutSec'
import CoreServices from '../components/HomeComp/CoreServices'
import GradientBackground from '../components/HomeComp/HeroSection'
import ProductsShowcase from '../components/HomeComp/Products'
import MarqueeClients from '../components/MarqueeClients'
import Marquee from '../components/MarqueText'
import SEOAdjust from '../components/SEOAdjust'
import TestimonialsCarousel from '../components/Testimonials'
import Timeline from '../components/Timeline'

const HomePage = () => {
    
    return (
        <>
            <SEOAdjust
                title="Custom Software Development & IT Solutions | AWREX"
                description="AWREX specializes in custom software development, web and app development, system design, and DevOps. We build scalable, innovative digital solutions to transform your business."
            />
            <GradientBackground />
            <CoreServices />
            <ProductsShowcase />
            <WhyChooseUs />
            <ModernAboutSection />
            <Marquee />
            <Timeline />
            <TestimonialsCarousel />
            <MarqueeClients/>
            <CallToAction />
            {/* <GetInTouch/> */}
        </>
    )
}

export default HomePage
