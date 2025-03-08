import { ArrowRight, Badge } from "lucide-react"
import SoftwareServices from "../../assets/softwareBanner.png"
import ProcessSection from "./ServiceProcess"
import CallToAction from "../AboutComp/CallToAction"
import TestimonialsCarousel from "../Testimonials"

const ServicesPages = () => {
	return (
		<>
			{/* -----------------  Hero Section ----------------- */}
			<div className="px-4 bg-gradient-to-b from-slate-900 py-20 md:py-0 to-slate-800 text-white min-h-screen grid gap-8 lg:grid-cols-2 lg:gap-16">
				<div className="flex flex-col justify-center space-y-6">
					<span className="flex items-center gap-2 bg-blue-600 w-fit px-3 py-1 rounded-full">
						<Badge className="w-4 h-4 text-white" />
						<h3 className="text-sm md:text-base">
							Software Development
						</h3>
					</span>
					<h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
						Transforming Ideas Into <span className="text-blue-400">Powerful Software</span>
					</h1>
					<p className="max-w-[600px] text-slate-300 text-base md:text-lg lg:text-xl">
						Custom software solutions designed to solve complex business challenges and drive sustainable growth.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 pt-4">
						<button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-300">
							Start Your Project
							<ArrowRight className="ml-2 h-4 w-4" />
						</button>
						<button className="flex items-center justify-center border border-slate-500 text-white hover:bg-slate-700 px-6 py-2 rounded-lg transition duration-300">
							View Our Work
						</button>
					</div>
					{/* <div className="flex items-center gap-8 pt-6">
								<div className="flex flex-col">
									<span className="text-3xl font-bold text-blue-400">10+</span>
									<span className="text-sm text-slate-300">Years Experience</span>
								</div>
								<div className="flex flex-col">
									<span className="text-3xl font-bold text-blue-400">200+</span>
									<span className="text-sm text-slate-300">Projects Delivered</span>
								</div>
								<div className="flex flex-col">
									<span className="text-3xl font-bold text-blue-400">98%</span>
									<span className="text-sm text-slate-300">Client Satisfaction</span>
								</div>
							</div> */}
				</div>
				<div className="flex items-center justify-center">
					<div className="relative w-full max-w-xl">
						<div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-blue-700/20 blur-3xl" />
						<img
							src={SoftwareServices}
							alt="Software Development"
							width={600}
							height={600}
							className="relative z-10 rounded-2xl object-cover"
						/>
					</div>
				</div>
			</div>
			<ProcessSection/>
			<TestimonialsCarousel/>
			<CallToAction/>
		</>
	)
}

export default ServicesPages