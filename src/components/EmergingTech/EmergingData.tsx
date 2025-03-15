import { BarChart, Check, Code, Globe, Lightbulb, Rocket, Shield, Zap } from "lucide-react";
import DataScienceImage from "../../assets/Emerging/data.webp";
import AIImage from "../../assets/Emerging/ai.png";
import MachineLearningImage from "../../assets/Emerging/machineLearning.png";
import MetaverseImage from "../../assets/Emerging/metaverse.png";
import RPAImage from "../../assets/Emerging/robotic.png";
import BigDataImage from "../../assets/Emerging/bigData.png";
import ComputerVisionImage from "../../assets/Emerging/computerVision.png";

export const EmergingData = [
    // Previous services here...
    {
        id: 26,
        url: "/emerging-tech/data-science",
        title: "Data Science",
        description: "Unlock the power of data with our data science solutions",
        image: DataScienceImage, // Replace with the actual image import
        intro: "We provide data science solutions to help businesses unlock the power of their data. Our experts use advanced analytics and machine learning to deliver actionable insights and drive decision-making.",
        keyFeatIntro: "Our data science solutions are designed to transform raw data into valuable insights.",
        keyFeatures: [
            {
                title: "Data Analysis",
                description: "Analyze large datasets to uncover patterns and trends.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Predictive Modeling",
                description: "Build predictive models to forecast future outcomes.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Data Visualization",
                description: "Create interactive visualizations to communicate insights effectively.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Machine Learning",
                description: "Leverage machine learning algorithms for advanced data analysis.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Big Data Integration",
                description: "Integrate and analyze big data from multiple sources.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Custom Solutions",
                description: "Tailor data science solutions to meet your specific business needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you unlock the power of data with our advanced data science solutions.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Actionable Insights",
                description: "Turn raw data into actionable insights for better decision-making.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Advanced Analytics",
                description: "Leverage advanced analytics and machine learning for deeper insights.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build data science solutions that grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering data science solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create intuitive and engaging data visualizations for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge data science features.",
            },
        ]
    },
    {
        id: 27,
        url: "/emerging-tech/artificial-intelligence",
        title: "Artificial Intelligence",
        description: "Transform your business with AI-powered solutions",
        image: AIImage, // Replace with the actual image import
        intro: "We provide artificial intelligence (AI) solutions to help businesses automate processes, improve decision-making, and enhance customer experiences. Our AI systems are designed to deliver real-world results.",
        keyFeatIntro: "Our AI solutions are designed to transform your business with intelligent automation and insights.",
        keyFeatures: [
            {
                title: "Process Automation",
                description: "Automate repetitive tasks to improve efficiency and reduce costs.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Natural Language Processing",
                description: "Enable machines to understand and respond to human language.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Predictive Analytics",
                description: "Use AI to predict future outcomes and trends.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Computer Vision",
                description: "Enable machines to interpret and analyze visual data.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "AI Chatbots",
                description: "Enhance customer support with intelligent chatbots.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Custom AI Solutions",
                description: "Tailor AI solutions to meet your specific business needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you transform your business with AI-powered solutions.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Efficiency",
                description: "Automate processes to improve efficiency and reduce costs.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Decision-Making",
                description: "Leverage AI insights for better decision-making.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build AI solutions that grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering AI solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create intuitive and engaging AI experiences for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge AI features.",
            },
        ]
    },
    {
        id: 28,
        url: "/emerging-tech/machine-learning",
        title: "Machine Learning",
        description: "Leverage machine learning to drive innovation and efficiency",
        image: MachineLearningImage, // Replace with the actual image import
        intro: "We provide machine learning solutions to help businesses analyze data, automate processes, and make data-driven decisions. Our machine learning models are designed to deliver accurate and actionable insights.",
        keyFeatIntro: "Our machine learning solutions are designed to drive innovation and efficiency.",
        keyFeatures: [
            {
                title: "Predictive Modeling",
                description: "Build models to predict future outcomes and trends.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Data Analysis",
                description: "Analyze large datasets to uncover patterns and insights.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Automation",
                description: "Automate repetitive tasks with machine learning algorithms.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Natural Language Processing",
                description: "Enable machines to understand and respond to human language.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Image Recognition",
                description: "Enable machines to interpret and analyze visual data.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Custom Solutions",
                description: "Tailor machine learning solutions to meet your specific business needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you leverage machine learning to drive innovation and efficiency.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Efficiency",
                description: "Automate processes to improve efficiency and reduce costs.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Decision-Making",
                description: "Leverage machine learning insights for better decision-making.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build machine learning solutions that grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering machine learning solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create intuitive and engaging machine learning experiences for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge machine learning features.",
            },
        ]
    },
    {
        id: 29,
        url: "/emerging-tech/metaverse",
        title: "Metaverse",
        description: "Explore the future of digital experiences with our metaverse solutions",
        image: MetaverseImage, // Replace with the actual image import
        intro: "We provide metaverse solutions to help businesses create immersive digital experiences. Our platforms are designed to enable virtual interactions, gaming, and commerce in a fully immersive environment.",
        keyFeatIntro: "Our metaverse solutions are designed to create immersive and engaging digital experiences.",
        keyFeatures: [
            {
                title: "Virtual Worlds",
                description: "Create immersive virtual worlds for gaming, socializing, and commerce.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Augmented Reality",
                description: "Integrate augmented reality for enhanced user experiences.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Virtual Commerce",
                description: "Enable virtual commerce for buying and selling in the metaverse.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Social Interaction",
                description: "Facilitate social interactions in a fully immersive environment.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Custom Avatars",
                description: "Create and customize avatars for a personalized experience.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Integration",
                description: "Integrate with other platforms for seamless experiences.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you explore the future of digital experiences with our metaverse solutions.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Immersive Experiences",
                description: "Create fully immersive digital experiences for your users.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Engagement",
                description: "Engage users with interactive and immersive environments.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build metaverse solutions that grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering metaverse solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create intuitive and engaging metaverse experiences for your users.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge metaverse features.",
            },
        ]
    },
    {
        id: 30,
        url: "/emerging-tech/robotic-process-automation",
        title: "Robotic Process Automation",
        description: "Automate repetitive tasks with our RPA solutions",
        image: RPAImage, // Replace with the actual image import
        intro: "We provide robotic process automation (RPA) solutions to help businesses automate repetitive tasks, improve efficiency, and reduce costs. Our RPA systems are designed to deliver fast and accurate results.",
        keyFeatIntro: "Our RPA solutions are designed to automate repetitive tasks and improve efficiency.",
        keyFeatures: [
            {
                title: "Task Automation",
                description: "Automate repetitive tasks to improve efficiency and reduce errors.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Process Optimization",
                description: "Optimize business processes with intelligent automation.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Data Entry",
                description: "Automate data entry tasks for faster and more accurate results.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Integration",
                description: "Integrate with existing systems for seamless automation.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Scalability",
                description: "Scale your automation efforts as your business grows.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Custom Solutions",
                description: "Tailor RPA solutions to meet your specific business needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you automate repetitive tasks with our RPA solutions.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Efficiency",
                description: "Automate tasks to improve efficiency and reduce costs.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Accuracy",
                description: "Reduce errors with automated and accurate processes.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build RPA solutions that grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering RPA solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create intuitive and engaging RPA experiences for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge RPA features.",
            },
        ]
    },
    {
        id: 31,
        url: "/emerging-tech/big-data",
        title: "Big Data",
        description: "Harness the power of big data with our advanced solutions",
        image: BigDataImage, // Replace with the actual image import
        intro: "We provide big data solutions to help businesses analyze and leverage large datasets for better decision-making. Our platforms are designed to handle massive volumes of data and deliver actionable insights.",
        keyFeatIntro: "Our big data solutions are designed to transform raw data into valuable insights.",
        keyFeatures: [
            {
                title: "Data Integration",
                description: "Integrate data from multiple sources for comprehensive analysis.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Data Storage",
                description: "Store and manage large datasets with scalable storage solutions.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Data Analysis",
                description: "Analyze large datasets to uncover patterns and trends.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Real-Time Processing",
                description: "Process and analyze data in real-time for immediate insights.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Data Visualization",
                description: "Create interactive visualizations to communicate insights effectively.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Custom Solutions",
                description: "Tailor big data solutions to meet your specific business needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you harness the power of big data with our advanced solutions.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Actionable Insights",
                description: "Turn raw data into actionable insights for better decision-making.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Advanced Analytics",
                description: "Leverage advanced analytics for deeper insights.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build big data solutions that grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering big data solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create intuitive and engaging data visualizations for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge big data features.",
            },
        ]
    },
    {
        id: 32,
        url: "/emerging-tech/computer-vision",
        title: "Computer Vision",
        description: "Enable machines to see and interpret visual data",
        image: ComputerVisionImage, // Replace with the actual image import
        intro: "We provide computer vision solutions to help businesses analyze and interpret visual data. Our systems are designed to enable machines to see, understand, and act on visual information.",
        keyFeatIntro: "Our computer vision solutions are designed to transform visual data into actionable insights.",
        keyFeatures: [
            {
                title: "Image Recognition",
                description: "Enable machines to recognize and classify images.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Object Detection",
                description: "Detect and track objects in images and videos.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Facial Recognition",
                description: "Enable machines to recognize and verify faces.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Video Analysis",
                description: "Analyze video data for insights and trends.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Augmented Reality",
                description: "Integrate computer vision with AR for enhanced experiences.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Custom Solutions",
                description: "Tailor computer vision solutions to meet your specific business needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you enable machines to see and interpret visual data with our computer vision solutions.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Efficiency",
                description: "Automate visual data analysis for better efficiency.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Accuracy",
                description: "Reduce errors with accurate visual data interpretation.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build computer vision solutions that grow with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering computer vision solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create intuitive and engaging computer vision experiences for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge computer vision features.",
            },
        ]
    },
];