import CallToAction from '../components/AboutComp/CallToAction'
import WhyChooseUs from '../components/AboutComp/WhyChooseUs'
import ModernAboutSection from '../components/AboutSec'
import CoreServices from '../components/HomeComp/CoreServices'
import GetInTouch from '../components/HomeComp/GetInTouch'
import GradientBackground from '../components/HomeComp/HeroSection'
import ProductsShowcase from '../components/HomeComp/Products'
import Marquee from '../components/MarqueText'
import SEOAdjust from '../components/SEOAdjust'
import TestimonialsCarousel from '../components/Testimonials'
import Timeline from '../components/Timeline'

const HomePage = () => {
    return (
        <>
            <SEOAdjust title='About Us' description='About Us Page' />
            <GradientBackground />
            <CoreServices />
            <ProductsShowcase />
            <WhyChooseUs />
            <ModernAboutSection />
            <Marquee />
            <Timeline />
            <TestimonialsCarousel />
            <CallToAction />
            {/* <GetInTouch/> */}
        </>
    )
}

export default HomePage
