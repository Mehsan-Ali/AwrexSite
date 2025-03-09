import { BarChart, Check, Code, Globe, Lightbulb, Rocket, Shield, Zap } from "lucide-react";
import DigitalTransformationImage from "../../assets/Consulation/digitalImage.png";
import ManagedITServicesImage from "../../assets/Consulation/managedIt.png";
import ITOutsourcingImage from "../../assets/Consulation/itOutsourcing.png";
import ITConsultingImage from "../../assets/Consulation/itConsult.png";
import ITSupportImage from "../../assets/Consulation/itSupport.png";
import DiscoveryWorkshopImage from "../../assets/Consulation/discovery.png";
import ProductStrategyImage from "../../assets/Consulation/productStrategy.png";
import ProcessConsultingImage from "../../assets/Consulation/processConsult.png";

export const ConsulationData = [
    // Previous services here...
    {
        id: 33,
        url: "/consultation/digital-transformation",
        title: "Digital Transformation",
        description: "Transform your business with our digital transformation solutions",
        image: DigitalTransformationImage, // Replace with the actual image import
        intro: "We provide digital transformation solutions to help businesses modernize their operations, improve efficiency, and stay competitive in the digital age. Our experts guide you through every step of the transformation journey.",
        keyFeatIntro: "Our digital transformation solutions are designed to future-proof your business.",
        keyFeatures: [
            {
                title: "Strategy Development",
                description: "Develop a comprehensive digital transformation strategy tailored to your business.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Technology Integration",
                description: "Integrate the latest technologies to streamline your operations.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Process Automation",
                description: "Automate repetitive tasks to improve efficiency and reduce costs.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Data Analytics",
                description: "Leverage data analytics for better decision-making and insights.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Customer Experience",
                description: "Enhance customer experiences with digital tools and platforms.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Change Management",
                description: "Manage organizational change effectively during the transformation process.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you transform your business with our digital transformation solutions.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Efficiency",
                description: "Streamline operations and improve efficiency with digital tools.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Customer Experience",
                description: "Deliver exceptional customer experiences with digital platforms.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build digital solutions that grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering digital transformation solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create intuitive and engaging digital experiences for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge digital transformation features.",
            },
        ]
    },
    {
        id: 34,
        url: "/consultation/managed-it-services",
        title: "Managed IT Services",
        description: "Outsource your IT operations to our expert team",
        image: ManagedITServicesImage, // Replace with the actual image import
        intro: "We provide managed IT services to help businesses streamline their IT operations, reduce costs, and improve efficiency. Our team of experts manages your IT infrastructure, so you can focus on your core business.",
        keyFeatIntro: "Our managed IT services are designed to keep your IT systems running smoothly.",
        keyFeatures: [
            {
                title: "24/7 Monitoring",
                description: "Monitor your IT systems 24/7 to ensure optimal performance.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Proactive Maintenance",
                description: "Perform proactive maintenance to prevent issues before they occur.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Security Management",
                description: "Protect your IT systems with advanced security measures.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Data Backup & Recovery",
                description: "Ensure your data is backed up and recoverable in case of emergencies.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Help Desk Support",
                description: "Provide 24/7 help desk support for your IT needs.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Custom Solutions",
                description: "Tailor managed IT services to meet your specific business needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you streamline your IT operations with our managed IT services.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Efficiency",
                description: "Streamline IT operations for better efficiency and cost savings.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Security",
                description: "Protect your IT systems with advanced security measures.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build managed IT services that grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering managed IT services worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create intuitive and engaging IT experiences for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge IT features.",
            },
        ]
    },
    {
        id: 35,
        url: "/consultation/it-outsourcing",
        title: "IT Outsourcing",
        description: "Outsource your IT needs to our expert team",
        image: ITOutsourcingImage, // Replace with the actual image import
        intro: "We provide IT outsourcing services to help businesses reduce costs, improve efficiency, and focus on their core operations. Our team of experts handles your IT needs, so you can focus on growing your business.",
        keyFeatIntro: "Our IT outsourcing services are designed to meet your specific business needs.",
        keyFeatures: [
            {
                title: "Infrastructure Management",
                description: "Manage your IT infrastructure for optimal performance.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Application Development",
                description: "Develop and maintain custom applications for your business.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Cloud Services",
                description: "Migrate and manage your IT systems in the cloud.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Security Services",
                description: "Protect your IT systems with advanced security measures.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Help Desk Support",
                description: "Provide 24/7 help desk support for your IT needs.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Custom Solutions",
                description: "Tailor IT outsourcing services to meet your specific business needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you reduce costs and improve efficiency with our IT outsourcing services.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Cost Savings",
                description: "Reduce IT costs with our efficient outsourcing solutions.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Security",
                description: "Protect your IT systems with advanced security measures.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build IT outsourcing solutions that grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering IT outsourcing services worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create intuitive and engaging IT experiences for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge IT features.",
            },
        ]
    },
    {
        id: 36,
        url: "/consultation/it-consulting",
        title: "IT Consulting",
        description: "Get expert advice and guidance for your IT needs",
        image: ITConsultingImage, // Replace with the actual image import
        intro: "We provide IT consulting services to help businesses optimize their IT infrastructure, improve efficiency, and achieve their goals. Our experts offer tailored advice and guidance to meet your specific needs.",
        keyFeatIntro: "Our IT consulting services are designed to help you make informed decisions about your IT infrastructure.",
        keyFeatures: [
            {
                title: "IT Strategy",
                description: "Develop a comprehensive IT strategy aligned with your business goals.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Technology Assessment",
                description: "Assess your current technology stack and identify areas for improvement.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Cloud Consulting",
                description: "Get expert advice on migrating to and managing cloud services.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Security Consulting",
                description: "Protect your IT systems with expert security advice.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Digital Transformation",
                description: "Get guidance on transforming your business with digital tools.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Custom Solutions",
                description: "Tailor IT consulting services to meet your specific business needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you optimize your IT infrastructure with our expert consulting services.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Efficiency",
                description: "Optimize your IT infrastructure for better efficiency.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Security",
                description: "Protect your IT systems with expert security advice.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build IT solutions that grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering IT consulting services worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create intuitive and engaging IT experiences for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge IT features.",
            },
        ]
    },
    {
        id: 37,
        url: "/consultation/it-support",
        title: "IT Support",
        description: "Get reliable IT support for your business",
        image: ITSupportImage, // Replace with the actual image import
        intro: "We provide IT support services to help businesses resolve technical issues, maintain their IT systems, and ensure smooth operations. Our team of experts is available 24/7 to assist you.",
        keyFeatIntro: "Our IT support services are designed to keep your IT systems running smoothly.",
        keyFeatures: [
            {
                title: "24/7 Help Desk",
                description: "Get 24/7 support for all your IT needs.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Remote Support",
                description: "Resolve issues quickly with remote support services.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "On-Site Support",
                description: "Get on-site support for complex IT issues.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "System Maintenance",
                description: "Perform regular maintenance to keep your systems running smoothly.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Security Support",
                description: "Protect your IT systems with advanced security measures.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Custom Solutions",
                description: "Tailor IT support services to meet your specific business needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you keep your IT systems running smoothly with our reliable support services.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Efficiency",
                description: "Resolve IT issues quickly for better efficiency.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Security",
                description: "Protect your IT systems with advanced security measures.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build IT support solutions that grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering IT support services worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create intuitive and engaging IT experiences for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge IT features.",
            },
        ]
    },
    {
        id: 38,
        url: "/consultation/discovery-workshop",
        title: "Discovery Workshop",
        description: "Define your project goals and requirements with our discovery workshops",
        image: DiscoveryWorkshopImage, // Replace with the actual image import
        intro: "We provide discovery workshops to help businesses define their project goals, requirements, and strategies. Our workshops are designed to align stakeholders and set the foundation for successful projects.",
        keyFeatIntro: "Our discovery workshops are designed to help you kickstart your projects with clarity and focus.",
        keyFeatures: [
            {
                title: "Goal Definition",
                description: "Define clear project goals and objectives.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Requirement Gathering",
                description: "Gather and document project requirements.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Stakeholder Alignment",
                description: "Align stakeholders on project goals and expectations.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Strategy Development",
                description: "Develop a comprehensive project strategy.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Risk Assessment",
                description: "Identify and mitigate potential project risks.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Custom Solutions",
                description: "Tailor discovery workshops to meet your specific project needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you define your project goals and requirements with our discovery workshops.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Clear Goals",
                description: "Define clear project goals and objectives.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Stakeholder Alignment",
                description: "Align stakeholders on project goals and expectations.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build project strategies that grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering discovery workshops worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create intuitive and engaging workshop experiences for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge workshop features.",
            },
        ]
    },
    {
        id: 39,
        url: "/consultation/product-strategy",
        title: "Product Strategy",
        description: "Develop a winning product strategy with our expert guidance",
        image: ProductStrategyImage, // Replace with the actual image import
        intro: "We provide product strategy services to help businesses define their product vision, roadmap, and go-to-market strategy. Our experts guide you through every step of the product development process.",
        keyFeatIntro: "Our product strategy services are designed to help you create successful products.",
        keyFeatures: [
            {
                title: "Product Vision",
                description: "Define a clear vision for your product.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Roadmap Development",
                description: "Develop a comprehensive product roadmap.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Market Research",
                description: "Conduct market research to identify opportunities and trends.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Go-To-Market Strategy",
                description: "Develop a go-to-market strategy for successful product launches.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Competitive Analysis",
                description: "Analyze competitors to identify strengths and weaknesses.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Custom Solutions",
                description: "Tailor product strategy services to meet your specific business needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you develop a winning product strategy with our expert guidance.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Clear Vision",
                description: "Define a clear vision for your product.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Market Insights",
                description: "Gain valuable insights into market trends and opportunities.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build product strategies that grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering product strategy services worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create intuitive and engaging product experiences for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge product features.",
            },
        ]
    },
    {
        id: 40,
        url: "/consultation/process-consulting",
        title: "Process Consulting",
        description: "Optimize your business processes with our expert consulting",
        image: ProcessConsultingImage, // Replace with the actual image import
        intro: "We provide process consulting services to help businesses optimize their operations, improve efficiency, and reduce costs. Our experts analyze your processes and provide tailored solutions to meet your needs.",
        keyFeatIntro: "Our process consulting services are designed to streamline your business operations.",
        keyFeatures: [
            {
                title: "Process Analysis",
                description: "Analyze your business processes to identify inefficiencies.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Process Optimization",
                description: "Optimize your processes for better efficiency and cost savings.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Automation",
                description: "Automate repetitive tasks to improve efficiency.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Change Management",
                description: "Manage organizational change effectively during process improvements.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Performance Metrics",
                description: "Track and measure process performance with key metrics.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Custom Solutions",
                description: "Tailor process consulting services to meet your specific business needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you optimize your business processes with our expert consulting.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Efficiency",
                description: "Streamline processes for better efficiency and cost savings.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Performance",
                description: "Track and measure process performance with key metrics.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build process solutions that grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering process consulting services worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create intuitive and engaging process experiences for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge process features.",
            },
        ]
    },
];