import { useParams } from "react-router-dom"
import { SolutionsData } from "./SolutionsData"
import ProcessSection from "../OurServices/ServiceProcess";
import TestimonialsCarousel from "../Testimonials";
import CallToAction from "../AboutComp/CallToAction";
import SolutionHero from "./SolutionHero";
import FeaturesSection from "./KeyFeatures";
import BenefitsSection from "./WhyChooseUs";

const SolutionsPages = () => {
	const param = useParams<{ solution: string | undefined }>()
	// const service = param.service
	const currentService = SolutionsData.find(solution => solution.url.includes(param.solution || ''));

	// console.log(currentService?.title)
	return (
		<>
			<SolutionHero solution={currentService} />
			<FeaturesSection solution={currentService} />
			<BenefitsSection solution={currentService}/>
			<ProcessSection />
			<TestimonialsCarousel />
			<CallToAction />
		</>
	)
}

export default SolutionsPages