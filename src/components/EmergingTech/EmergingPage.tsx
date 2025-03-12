import { useParams } from "react-router-dom"
import { EmergingData } from "./EmergingData";
import ProcessSection from "../OurServices/ServiceProcess";
import TestimonialsCarousel from "../Testimonials";
import CallToAction from "../AboutComp/CallToAction";
import FeaturesSection from "./KeyFeatures";
import BenefitsSection from "./WhyChooseUs";
import EmergingHero from "./EmergingHero";

const EmergingPages = () => {
	const param = useParams<{ emerging: string | undefined }>()
	const currentService = EmergingData.find(emerging => emerging.url.includes(param.emerging || ''));
	return (
		<>
			<EmergingHero solution={currentService} />
			<FeaturesSection solution={currentService} />
			<BenefitsSection solution={currentService} />
			<ProcessSection />
			<TestimonialsCarousel />
			<CallToAction />
		</>
	)
}

export default EmergingPages