import ProcessSection from "./ServiceProcess"
import CallToAction from "../AboutComp/CallToAction"
import TestimonialsCarousel from "../Testimonials"
import ServiceHero from "./ServiceHero"
import FeaturesSection from "./KeyFeatures"
import BenefitsSection from "./WhyChooseUs"
import { useParams } from "react-router-dom"
import { ServiceData } from "./ServiceData"
import SEOAdjust from "../SEOAdjust"

const ServicesPages = () => {
	const param = useParams<{ service: string | undefined }>()
	// const service = param.service
	const currentService = ServiceData.find(service => service.url.includes(param.service || ''));

	console.log(currentService?.title)
	return (
		<>
			<SEOAdjust title={`${currentService?.SEOTitle}`} description={`${currentService?.SEOdescription}`} />
			<ServiceHero service={currentService} />
			<FeaturesSection service={currentService} />
			<BenefitsSection service={currentService} />
			<ProcessSection />
			<TestimonialsCarousel />
			<CallToAction />
		</>
	)
}

export default ServicesPages