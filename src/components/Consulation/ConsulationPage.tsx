import { useParams } from "react-router-dom"
// import { EmergingData } from "./ConsulationData";
import ProcessSection from "../OurServices/ServiceProcess";
import TestimonialsCarousel from "../Testimonials";
import CallToAction from "../AboutComp/CallToAction";
import FeaturesSection from "./KeyFeatures";
import BenefitsSection from "./WhyChooseUs";
import { ConsulationData } from "./ConsulationData";
import ConsulationHero from "./ConsulationHero";

const ConsulationPage = () => {
	const param = useParams<{ consulation: string | undefined }>()
	const currentService = ConsulationData.find(consulation => consulation.url.includes(param.consulation || ''));
	return (
		<>
			<ConsulationHero consulation={currentService} />
			<FeaturesSection consulation={currentService} />
			<BenefitsSection consulation={currentService} />
			<ProcessSection />
			<TestimonialsCarousel />
			<CallToAction />
		</>
	)
}

export default ConsulationPage