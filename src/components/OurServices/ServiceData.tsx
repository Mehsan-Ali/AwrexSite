import { BarChart, Check, Code, Globe, Lightbulb, Rocket, Shield, Smartphone, Zap } from "lucide-react";
import SoftwareDevelopment from "../../assets/Services/softwareDevlopment.png";
import WebDevelopment from "../../assets/Services/webDevlopment.png";
import MobileAppDevelopment from "../../assets/Services/mobileApp.png";
import AutomationQATesting from "../../assets/Services/automationTest.png";
import SystemsReEngineering from "../../assets/Services/systemDesign.png";
import DataAnalytics from "../../assets/Services/dataAnalytics.png";
import SystemIntegration from "../../assets/Services/systemIntegeration.png";
import UIUXDesign from "../../assets/Services/ui&uxDesign.png";
import InfrastructureServices from "../../assets/Services/infrastructure.png";
import DevOps from "../../assets/Services/devops.png";
import StaffAugmentation from "../../assets/Services/staffAugmentation.png";

export const ServiceData = [
    {
        id: 1,
        url: "/services/software-development",
        title: "Software Development",
        description: "Build custom software solutions tailored to your business needs",
        image: SoftwareDevelopment,
        intro: "We specialize in developing custom software solutions that empower businesses to streamline operations, enhance productivity, and achieve their goals. Our team of expert developers creates scalable, secure, and innovative software tailored to your unique requirements.",
        keyFeatIntro: "Our software development services cover the entire lifecycle of your project, from ideation to deployment and beyond.",
        keyFeatures: [
            {
                title: "Custom Solutions",
                description: "Tailored software designed to meet your specific business needs and goals.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Agile Development",
                description: "Iterative development process for faster delivery and continuous improvement.",
                icon: <Rocket className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Scalable Architecture",
                description: "Build software that grows with your business and handles increasing demands.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Cross-Platform Compatibility",
                description: "Develop software that works seamlessly across multiple platforms and devices.",
                icon: <Smartphone className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Robust Security",
                description: "Implement enterprise-grade security measures to protect your data and systems.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Continuous Support",
                description: "Ongoing maintenance and support to ensure your software remains up-to-date and functional.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We deliver software solutions that drive innovation, efficiency, and growth for your business.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Faster Time-to-Market",
                description: "Accelerate your project timelines with our agile development approach.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enterprise-Grade Security",
                description: "Protect your software with advanced security measures and best practices.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build software that can grow and adapt to your business needs.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering software solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Centric Design",
                description: "Focus on creating intuitive and engaging user experiences.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Technology",
                description: "Use cutting-edge tools and frameworks to build future-proof software.",
            },
        ]
    },
    {
        id: 2,
        url: "/services/web-development-maintenance",
        title: "Web App Development & Maintenance",
        description: "Custom web applications built for your business",
        image: WebDevelopment,
        intro: "We design and develop custom web applications that help businesses streamline operations, improve customer experiences, and drive growth. Our team of experienced developers builds scalable, secure, and user-friendly web applications tailored to your specific requirements.",
        keyFeatIntro: "Our web application development services include everything you need to build, launch, and maintain a successful web application.",
        keyFeatures: [
            {
                title: "Responsive Design",
                description: "Fully responsive layouts that work perfectly on any device, from mobile to desktop.",
                icon: <Smartphone className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Modern Tech Stack",
                description: "Built with the latest technologies including React, Next.js, and Tailwind CSS.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Global Deployment",
                description: "Deploy your application to a global edge network for maximum performance.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Advanced Security",
                description: "Enterprise-grade security with automatic updates and vulnerability scanning.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
            {
                title: "Performance Optimization",
                description: "Optimized for speed with code splitting, lazy loading, and image optimization.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Analytics Integration",
                description: "Built-in analytics to track user behavior and improve your application.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
        ],
        whyChooseSubHeading: "We deliver more than just websites. We create digital experiences that drive growth and engagement.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Lightning-Fast Performance",
                description: "Optimized code and modern architecture ensure your website loads in milliseconds, not seconds.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Rock-Solid Security",
                description: "Built-in protection against common vulnerabilities with regular security updates and monitoring.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Clean, Maintainable Code",
                description: "Well-structured codebase that's easy to maintain and scale as your business grows.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Responsive By Design",
                description: "Flawless experience across all devices, from desktop to mobile, with adaptive layouts.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Accessibility First",
                description: "Inclusive design practices ensuring your website is usable by everyone, regardless of ability.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Future-Proof Technology",
                description: "Built with cutting-edge frameworks and tools that keep your site relevant for years to come.",
            },
        ]
    },
    {
        id: 3,
        url: "/services/mobile-app-development",
        title: "Mobile App Development",
        description: "Custom mobile applications for iOS and Android",
        image: MobileAppDevelopment,
        intro: "We specialize in creating high-performance mobile applications that deliver seamless user experiences across both iOS and Android platforms. Our mobile apps are designed to meet your business needs, whether it's for customer engagement, internal operations, or e-commerce.",
        keyFeatIntro: "Our mobile app development services cover the entire lifecycle of your app, from concept to deployment and beyond.",
        keyFeatures: [
            {
                title: "Cross-Platform Development",
                description: "Build once, deploy everywhere with our cross-platform development expertise.",
                icon: <Smartphone className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Native Performance",
                description: "Leverage native capabilities for superior performance and user experience.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Cloud Integration",
                description: "Seamless integration with cloud services for data storage and synchronization.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Push Notifications",
                description: "Engage users with timely and relevant push notifications.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "App Store Optimization",
                description: "Maximize visibility and downloads with our ASO strategies.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Security & Compliance",
                description: "Ensure your app meets all security standards and regulatory requirements.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We create mobile apps that not only look great but also perform exceptionally well.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Fast Development Cycles",
                description: "Rapid prototyping and agile development to bring your app to market quickly.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Robust Security",
                description: "Protect user data with industry-leading security practices.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Architecture",
                description: "Build apps that can grow with your user base and business needs.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Reach",
                description: "Deploy your app to users around the world with ease.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Centric Design",
                description: "Focus on delivering the best possible user experience.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge features.",
            },
        ]
    },
    {
        id: 4,
        url: "/services/automation-and-qa-testing",
        title: "Automation & QA Testing",
        description: "Ensure the quality and reliability of your software",
        image: AutomationQATesting,
        intro: "Our automation and QA testing services help you deliver high-quality software by identifying and fixing issues before they reach your users. We use the latest tools and methodologies to ensure your software is reliable, secure, and performs as expected.",
        keyFeatIntro: "Our QA and automation testing services cover a wide range of testing types to ensure comprehensive coverage.",
        keyFeatures: [
            {
                title: "Automated Testing",
                description: "Reduce manual effort and increase test coverage with automated testing.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Performance Testing",
                description: "Ensure your application can handle high loads and stress conditions.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Security Testing",
                description: "Identify vulnerabilities and ensure your application is secure.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Functional Testing",
                description: "Verify that your application works as intended.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Regression Testing",
                description: "Ensure new changes don't break existing functionality.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Continuous Integration",
                description: "Integrate testing into your CI/CD pipeline for faster feedback.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you deliver software that your users can trust.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Faster Time-to-Market",
                description: "Automate testing to speed up your release cycles.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Security",
                description: "Identify and fix security issues before they become problems.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Higher Quality",
                description: "Ensure your software meets the highest quality standards.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Standards",
                description: "Adhere to international testing standards and best practices.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Comprehensive Coverage",
                description: "Test all aspects of your application for complete peace of mind.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Tools",
                description: "Use the latest tools and technologies for effective testing.",
            },
        ]
    },
    {
        id: 5,
        url: "/services/systems-re-engineering",
        title: "Systems Re-Engineering",
        description: "Modernize and optimize your legacy systems",
        image: SystemsReEngineering,
        intro: "We help businesses modernize their legacy systems to improve performance, scalability, and maintainability. Our re-engineering services ensure your systems are up-to-date with the latest technologies and best practices.",
        keyFeatIntro: "Our systems re-engineering services are designed to future-proof your technology stack.",
        keyFeatures: [
            {
                title: "Legacy System Assessment",
                description: "Evaluate your current systems to identify areas for improvement.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Technology Migration",
                description: "Migrate your systems to modern platforms and frameworks.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Performance Optimization",
                description: "Improve system performance and reduce latency.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Security Enhancements",
                description: "Upgrade security measures to protect against modern threats.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Scalability Improvements",
                description: "Ensure your systems can grow with your business.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Continuous Monitoring",
                description: "Monitor system health and performance in real-time.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you transform your legacy systems into modern, efficient, and secure platforms.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Faster Modernization",
                description: "Accelerate the modernization of your legacy systems.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Security",
                description: "Protect your systems with the latest security measures.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Performance",
                description: "Optimize your systems for better performance and reliability.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Best Practices",
                description: "Adopt international standards and best practices.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Future-Proof Solutions",
                description: "Ensure your systems are ready for future challenges.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Approach",
                description: "Leverage cutting-edge technologies for system re-engineering.",
            },
        ]
    },
    {
        id: 6,
        url: "/services/data-analytics",
        title: "Data Analytics",
        description: "Turn your data into actionable insights",
        image: DataAnalytics,
        intro: "We help businesses unlock the value of their data by providing advanced analytics solutions. Our data analytics services enable you to make data-driven decisions, optimize operations, and gain a competitive edge.",
        keyFeatIntro: "Our data analytics services cover the entire data lifecycle, from collection to visualization.",
        keyFeatures: [
            {
                title: "Data Collection",
                description: "Gather data from various sources for comprehensive analysis.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Data Cleaning",
                description: "Ensure your data is accurate and ready for analysis.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Data Visualization",
                description: "Create interactive dashboards and reports for easy insights.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Predictive Analytics",
                description: "Use machine learning to predict future trends and behaviors.",
                icon: <Lightbulb className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Data Security",
                description: "Protect your data with robust security measures.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Real-Time Analytics",
                description: "Get insights in real-time for immediate decision-making.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you make sense of your data and turn it into a strategic asset.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Faster Insights",
                description: "Get actionable insights quickly with our advanced analytics tools.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Data Security",
                description: "Ensure your data is protected with industry-leading security practices.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Our analytics solutions grow with your business needs.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our global experience in data analytics.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Accurate Predictions",
                description: "Make better decisions with accurate predictive analytics.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Tools",
                description: "Use the latest tools and technologies for data analysis.",
            },
        ]
    },
    {
        id: 7,
        url: "/services/system-integration",
        title: "System Integration",
        description: "Seamlessly connect your systems and applications",
        image: SystemIntegration,
        intro: "We provide system integration services that enable your applications and systems to work together seamlessly. Our integration solutions improve efficiency, reduce costs, and enhance the overall user experience.",
        keyFeatIntro: "Our system integration services ensure that your systems communicate effectively and efficiently.",
        keyFeatures: [
            {
                title: "API Integration",
                description: "Connect your systems with robust and secure APIs.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Data Synchronization",
                description: "Keep your data consistent across all systems.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Cloud Integration",
                description: "Integrate your on-premise systems with cloud services.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Real-Time Processing",
                description: "Enable real-time data exchange between systems.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Security & Compliance",
                description: "Ensure your integrations meet security and regulatory standards.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Scalable Architecture",
                description: "Build integrations that can grow with your business.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you create a connected ecosystem that drives business efficiency.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Faster Integration",
                description: "Reduce integration time with our proven methodologies.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Security",
                description: "Protect your data with secure integration practices.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Our integrations are designed to grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in integrating systems worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Reliable Performance",
                description: "Ensure your systems work together seamlessly.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Approach",
                description: "Use the latest technologies for effective system integration.",
            },
        ]
    },
    {
        id: 8,
        url: "/services/ui-ux-design",
        title: "UI/UX Design",
        description: "Create engaging and intuitive user experiences",
        image: UIUXDesign,
        intro: "We design user interfaces and experiences that are not only visually appealing but also intuitive and user-friendly. Our UI/UX design services help you create products that users love to interact with.",
        keyFeatIntro: "Our UI/UX design services cover the entire design process, from research to implementation.",
        keyFeatures: [
            {
                title: "User Research",
                description: "Understand your users' needs and behaviors through in-depth research.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Wireframing & Prototyping",
                description: "Create wireframes and prototypes to visualize your design concepts.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Visual Design",
                description: "Design visually stunning interfaces that align with your brand.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Interaction Design",
                description: "Design interactive elements that enhance user engagement.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Usability Testing",
                description: "Test your designs with real users to ensure they are intuitive and effective.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Responsive Design",
                description: "Ensure your designs work seamlessly across all devices.",
                icon: <Smartphone className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We create designs that not only look great but also deliver exceptional user experiences.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Faster Design Cycles",
                description: "Accelerate your design process with our efficient workflows.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Centric Approach",
                description: "Focus on delivering the best possible user experience.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Designs",
                description: "Create designs that can grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Standards",
                description: "Adhere to international design standards and best practices.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Accessibility",
                description: "Ensure your designs are usable by everyone, regardless of ability.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Solutions",
                description: "Use the latest design tools and technologies.",
            },
        ]
    },
    {
        id: 9,
        url: "/services/infrastructure-services",
        title: "Infrastructure Services",
        description: "Build and manage robust IT infrastructure",
        image: InfrastructureServices,
        intro: "We provide comprehensive infrastructure services that help you build, manage, and optimize your IT infrastructure. Our services ensure your systems are reliable, secure, and scalable.",
        keyFeatIntro: "Our infrastructure services cover everything from setup to ongoing management and optimization.",
        keyFeatures: [
            {
                title: "Cloud Infrastructure",
                description: "Build and manage cloud-based infrastructure for scalability and flexibility.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Network Management",
                description: "Ensure your network is secure, reliable, and performant.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Disaster Recovery",
                description: "Protect your data and systems with robust disaster recovery solutions.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Server Management",
                description: "Manage and optimize your servers for maximum performance.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Security Management",
                description: "Protect your infrastructure with advanced security measures.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Continuous Monitoring",
                description: "Monitor your infrastructure in real-time for optimal performance.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you build and manage infrastructure that supports your business goals.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Faster Deployment",
                description: "Deploy infrastructure solutions quickly and efficiently.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Security",
                description: "Protect your infrastructure with industry-leading security practices.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Our infrastructure solutions grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in managing infrastructure worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Reliable Performance",
                description: "Ensure your infrastructure is always up and running.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Approach",
                description: "Use the latest technologies for effective infrastructure management.",
            },
        ]
    },
    {
        id: 10,
        url: "/services/devops",
        title: "DevOps",
        description: "Streamline your development and operations",
        image: DevOps,
        intro: "We provide DevOps services that help you streamline your development and operations processes. Our DevOps solutions enable faster delivery, improved collaboration, and greater efficiency.",
        keyFeatIntro: "Our DevOps services cover the entire software development lifecycle, from planning to deployment.",
        keyFeatures: [
            {
                title: "Continuous Integration",
                description: "Automate your build and testing processes for faster feedback.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Continuous Deployment",
                description: "Deploy your applications automatically with every change.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Infrastructure as Code",
                description: "Manage your infrastructure using code for consistency and scalability.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Monitoring & Logging",
                description: "Monitor your applications and infrastructure in real-time.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Security & Compliance",
                description: "Ensure your DevOps processes meet security and regulatory standards.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Collaboration Tools",
                description: "Improve team collaboration with integrated tools and workflows.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you achieve faster, more reliable software delivery with DevOps.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Faster Delivery",
                description: "Accelerate your software delivery with automated processes.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Security",
                description: "Protect your applications and infrastructure with secure DevOps practices.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Our DevOps solutions grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in implementing DevOps worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Reliable Performance",
                description: "Ensure your applications are always up and running.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Approach",
                description: "Use the latest tools and technologies for effective DevOps.",
            },
        ]
    },
    {
        id: 11,
        url: "/services/staff-augmentation",
        title: "Staff Augmentation",
        description: "Scale your team with top talent",
        image: StaffAugmentation,
        intro: "We provide staff augmentation services that help you scale your team with top talent. Our flexible staffing solutions enable you to quickly fill skill gaps and meet project demands.",
        keyFeatIntro: "Our staff augmentation services provide you with the right talent at the right time.",
        keyFeatures: [
            {
                title: "Flexible Staffing",
                description: "Scale your team up or down based on project needs.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Top Talent",
                description: "Access a pool of highly skilled professionals.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Quick Onboarding",
                description: "Get your team up and running quickly with our streamlined onboarding process.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Cost-Effective",
                description: "Reduce costs with flexible staffing solutions.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Dedicated Teams",
                description: "Work with dedicated teams that are fully committed to your project.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Global Reach",
                description: "Access talent from around the world.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you build the right team for your project needs.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Faster Hiring",
                description: "Fill skill gaps quickly with our efficient hiring process.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Quality Talent",
                description: "Work with highly skilled professionals who deliver results.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Scale your team up or down based on project demands.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Talent Pool",
                description: "Access talent from around the world.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Cost-Effective",
                description: "Reduce costs with flexible staffing solutions.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Approach",
                description: "Use the latest tools and technologies for effective staffing.",
            },
        ]
    },
];


// export const ServiceData = [
//     {
//         id: 1,
//         url: "/services/web-development-maintenance",
//         title: "Web App Development & Maintenance",
//         description: "Custom web applications built for your business",
//         image: SoftwareDevelopment,
//         intro: "We design and develop custom web applications that help businesses streamline operations, improve customer experiences, and drive growth. Our team of experienced developers builds scalable, secure, and user-friendly web applications tailored to your specific requirements.",
//         keyFeatIntro: "Our web application development services include everything you need to build, launch, and maintain a successful web application.",
//         keyFeatures: [
//             {
//                 title: "Responsive Design",
//                 description: "Fully responsive layouts that work perfectly on any device, from mobile to desktop.",
//                 icon: <Smartphone className="h-6 w-6 text-white" />,
//                 gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
//             },
//             {
//                 title: "Modern Tech Stack",
//                 description: "Built with the latest technologies including React, Next.js, and Tailwind CSS.",
//                 icon: <Code className="h-6 w-6 text-white" />,
//                 gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
//             },
//             {
//                 title: "Global Deployment",
//                 description: "Deploy your application to a global edge network for maximum performance.",
//                 icon: <Globe className="h-6 w-6 text-white" />,
//                 gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
//             },
//             {
//                 title: "Advanced Security",
//                 description: "Enterprise-grade security with automatic updates and vulnerability scanning.",
//                 icon: <Shield className="h-6 w-6 text-white" />,
//                 gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
//             },
//             {
//                 title: "Performance Optimization",
//                 description: "Optimized for speed with code splitting, lazy loading, and image optimization.",
//                 icon: <Zap className="h-6 w-6 text-white" />,
//                 gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
//             },
//             {
//                 title: "Analytics Integration",
//                 description: "Built-in analytics to track user behavior and improve your application.",
//                 icon: <BarChart className="h-6 w-6 text-white" />,
//                 gradient: "bg-gradient-to-br from-red-500 to-rose-500",
//             },

//         ],
//         whyChooseSubHeading: "We deliver more than just websites. We create digital experiences that drive growth and engagement.",
//         whyChoose: [
//             {
//                 icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
//                 title: "Lightning-Fast Performance",
//                 description: "Optimized code and modern architecture ensure your website loads in milliseconds, not seconds.",
//             },
//             {
//                 icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
//                 title: "Rock-Solid Security",
//                 description: "Built-in protection against common vulnerabilities with regular security updates and monitoring.",
//             },
//             {
//                 icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
//                 title: "Clean, Maintainable Code",
//                 description: "Well-structured codebase that's easy to maintain and scale as your business grows.",
//             },
//             {
//                 icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
//                 title: "Responsive By Design",
//                 description: "Flawless experience across all devices, from desktop to mobile, with adaptive layouts.",
//             },
//             {
//                 icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
//                 title: "Accessibility First",
//                 description: "Inclusive design practices ensuring your website is usable by everyone, regardless of ability.",
//             },
//             {
//                 icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
//                 title: "Future-Proof Technology",
//                 description: "Built with cutting-edge frameworks and tools that keep your site relevant for years to come.",
//             },

//         ]
//     },
// ]