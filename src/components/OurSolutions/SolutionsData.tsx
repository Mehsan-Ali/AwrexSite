import { BarChart, Check, Code, Globe, Lightbulb, Rocket, Shield, Smartphone, Zap } from "lucide-react";
import AWSImage from "../../assets/Solutions/aws.png"
import CloudMigrationImage from "../../assets/Solutions/cloudMigration.png"
import BPOImage from "../../assets/Solutions/BPO.png"
import ECommerceImage from "../../assets/Solutions/ecommerce.png"
import CRMImage from "../../assets/Solutions/crm.png"
import MarketingImage from "../../assets/Solutions/marketingImage.png"
import ERPImage from "../../assets/Solutions/erp.png"
import ELearningImage from "../../assets/Solutions/eLearning.png"
import DocumentManagementImage from "../../assets/Solutions/documentImage.png"
import FleetManagementImage from "../../assets/Solutions/fleet.png"
import KioskSoftwareImage from "../../assets/Solutions/kiosk.png"
import CMSImage from "../../assets/Solutions/cms.png"
import WebPortalsImage from "../../assets/Solutions/webPortal.png"
import AssetManagementImage from "../../assets/Solutions/asset.webp"

export const SolutionsData = [
    {
        id: 12,
        url: "/solutions/aws",
        title: "AWS",
        description: "Leverage the power of Amazon Web Services for scalable and secure cloud solutions",
        image: AWSImage, // Replace with the actual image import
        intro: "We provide comprehensive AWS solutions to help businesses harness the full potential of cloud computing. From infrastructure setup to application deployment, our AWS expertise ensures scalability, security, and cost-efficiency.",
        keyFeatIntro: "Our AWS solutions are designed to meet the unique needs of your business, ensuring optimal performance and reliability.",
        keyFeatures: [
            {
                title: "Cloud Infrastructure",
                description: "Build and manage scalable cloud infrastructure with AWS services like EC2, S3, and RDS.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Serverless Architecture",
                description: "Develop and deploy applications using AWS Lambda for cost-effective and scalable solutions.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Data Analytics",
                description: "Utilize AWS analytics tools like Redshift and QuickSight for actionable insights.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Security & Compliance",
                description: "Ensure your cloud environment is secure with AWS IAM, KMS, and compliance tools.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Disaster Recovery",
                description: "Implement robust disaster recovery solutions with AWS Backup and S3 Glacier.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Cost Optimization",
                description: "Optimize cloud costs with AWS Cost Explorer and Trusted Advisor.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you unlock the full potential of AWS for your business.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Scale your infrastructure and applications effortlessly with AWS.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enterprise-Grade Security",
                description: "Protect your data and applications with AWS's robust security features.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Cost-Effective",
                description: "Optimize your cloud spending with our cost management strategies.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Reach",
                description: "Deploy your applications globally with AWS's extensive network.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Reliable Performance",
                description: "Ensure high availability and performance with AWS's reliable infrastructure.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Tools",
                description: "Leverage AWS's cutting-edge tools and services for your business.",
            },
        ]
    },
    {
        id: 13,
        url: "/solutions/cloud-migration",
        title: "Cloud Migration",
        description: "Seamlessly migrate your applications and data to the cloud",
        image: CloudMigrationImage, // Replace with the actual image import
        intro: "We provide end-to-end cloud migration services to help businesses transition to the cloud with minimal disruption. Our experts ensure a smooth migration process, whether you're moving to AWS, Azure, or Google Cloud.",
        keyFeatIntro: "Our cloud migration services are designed to ensure a seamless and secure transition to the cloud.",
        keyFeatures: [
            {
                title: "Migration Planning",
                description: "Develop a comprehensive migration strategy tailored to your business needs.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Data Migration",
                description: "Securely migrate your data to the cloud with minimal downtime.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Application Migration",
                description: "Migrate your applications to the cloud with minimal disruption.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Security & Compliance",
                description: "Ensure your cloud environment meets all security and compliance requirements.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Post-Migration Support",
                description: "Provide ongoing support to ensure your cloud environment runs smoothly.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Cost Optimization",
                description: "Optimize your cloud costs with our cost management strategies.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We ensure a smooth and secure transition to the cloud for your business.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Minimal Downtime",
                description: "Ensure business continuity with minimal disruption during migration.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Security",
                description: "Protect your data and applications during and after migration.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build a scalable cloud environment that grows with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Expert Guidance",
                description: "Leverage our expertise in cloud migration for a seamless transition.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Cost-Effective",
                description: "Optimize your cloud spending with our cost management strategies.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Approach",
                description: "Use the latest tools and technologies for effective cloud migration.",
            },
        ]
    },
    {
        id: 14,
        url: "/solutions/business-process-outsourcing",
        title: "Business Process Outsourcing",
        description: "Streamline your operations with our BPO services",
        image: BPOImage, // Replace with the actual image import
        intro: "We offer comprehensive business process outsourcing (BPO) services to help businesses streamline their operations, reduce costs, and improve efficiency. Our BPO solutions are tailored to meet your specific needs.",
        keyFeatIntro: "Our BPO services cover a wide range of business processes, ensuring efficiency and cost savings.",
        keyFeatures: [
            {
                title: "Customer Support",
                description: "Provide exceptional customer support with our BPO services.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Data Entry",
                description: "Accurate and efficient data entry services for your business.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Finance & Accounting",
                description: "Outsource your finance and accounting processes for better efficiency.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "HR Services",
                description: "Streamline your HR processes with our BPO solutions.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "IT Support",
                description: "Provide reliable IT support with our BPO services.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Cost Savings",
                description: "Reduce operational costs with our efficient BPO solutions.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you streamline your operations and reduce costs with our BPO services.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Efficiency",
                description: "Improve operational efficiency with our BPO services.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Cost Savings",
                description: "Reduce operational costs with our efficient BPO solutions.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Scale your operations with our flexible BPO services.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in providing BPO services worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Quality Assurance",
                description: "Ensure high-quality services with our rigorous quality control processes.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Approach",
                description: "Use the latest tools and technologies for effective BPO solutions.",
            },
        ]
    },
    {
        id: 15,
        url: "/solutions/e-commerce",
        title: "E-Commerce",
        description: "Build and manage powerful e-commerce platforms",
        image: ECommerceImage, // Replace with the actual image import
        intro: "We specialize in developing and managing e-commerce platforms that drive sales and enhance customer experiences. Our solutions are tailored to meet the unique needs of your online business.",
        keyFeatIntro: "Our e-commerce solutions are designed to help you build, launch, and grow your online store.",
        keyFeatures: [
            {
                title: "Custom E-Commerce Development",
                description: "Build tailored e-commerce platforms that align with your business goals.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Payment Gateway Integration",
                description: "Seamlessly integrate secure payment gateways for smooth transactions.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Inventory Management",
                description: "Efficiently manage your inventory with real-time tracking and updates.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Mobile Optimization",
                description: "Ensure your e-commerce platform is fully optimized for mobile devices.",
                icon: <Smartphone className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "SEO & Marketing",
                description: "Drive traffic and sales with our SEO and marketing strategies.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Analytics & Reporting",
                description: "Track performance and make data-driven decisions with advanced analytics.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you build and grow your e-commerce business with powerful solutions.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Faster Time-to-Market",
                description: "Launch your e-commerce platform quickly with our efficient development process.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Secure Transactions",
                description: "Ensure secure and seamless transactions for your customers.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build an e-commerce platform that grows with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Reach",
                description: "Expand your business globally with our e-commerce solutions.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create an intuitive and engaging shopping experience for your customers.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge e-commerce features.",
            },
        ]
    },
    {
        id: 16,
        url: "/solutions/crm",
        title: "CRM",
        description: "Manage customer relationships effectively with our CRM solutions",
        image: CRMImage, // Replace with the actual image import
        intro: "We provide customized CRM solutions to help businesses manage customer relationships, streamline sales processes, and improve customer satisfaction. Our CRM platforms are designed to meet your unique business needs.",
        keyFeatIntro: "Our CRM solutions are designed to help you build stronger customer relationships and drive business growth.",
        keyFeatures: [
            {
                title: "Customer Data Management",
                description: "Centralize and manage customer data for better insights and decision-making.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Sales Automation",
                description: "Automate sales processes to improve efficiency and productivity.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Marketing Automation",
                description: "Automate marketing campaigns to engage customers effectively.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Customer Support",
                description: "Provide exceptional customer support with integrated CRM tools.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Analytics & Reporting",
                description: "Track performance and gain insights with advanced analytics.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Customization",
                description: "Tailor your CRM platform to meet your specific business needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you build stronger customer relationships with our CRM solutions.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Efficiency",
                description: "Streamline your sales and marketing processes with automation.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Customer Insights",
                description: "Gain valuable insights into customer behavior and preferences.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build a CRM platform that grows with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering CRM solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create an intuitive and engaging experience for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge CRM features.",
            },
        ]
    },
    {
        id: 17,
        url: "/solutions/marketing-and-advertising",
        title: "Marketing & Advertising",
        description: "Drive growth and engagement with our marketing and advertising solutions",
        image: MarketingImage, // Replace with the actual image import
        intro: "We provide comprehensive marketing and advertising solutions to help businesses reach their target audience, increase brand awareness, and drive sales. Our strategies are tailored to meet your specific business goals.",
        keyFeatIntro: "Our marketing and advertising solutions are designed to deliver measurable results and maximize ROI.",
        keyFeatures: [
            {
                title: "Digital Marketing",
                description: "Leverage SEO, PPC, and social media to reach your target audience.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Content Marketing",
                description: "Create engaging content that resonates with your audience.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Email Marketing",
                description: "Design and execute effective email campaigns to nurture leads.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Social Media Advertising",
                description: "Run targeted ads on social media platforms to drive engagement.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Analytics & Reporting",
                description: "Track campaign performance and optimize strategies with data-driven insights.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Branding",
                description: "Build a strong brand identity that stands out in the market.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you achieve your marketing goals with innovative and data-driven strategies.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Targeted Campaigns",
                description: "Reach the right audience with precision-targeted campaigns.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Measurable Results",
                description: "Track and measure the success of your campaigns with advanced analytics.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Creative Solutions",
                description: "Stand out with innovative and creative marketing strategies.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Reach",
                description: "Expand your reach with global marketing campaigns.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Cost-Effective",
                description: "Maximize ROI with cost-effective marketing solutions.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Tools",
                description: "Use the latest tools and technologies for effective marketing.",
            },
        ]
    },
    {
        id: 18,
        url: "/solutions/erp",
        title: "ERP",
        description: "Streamline your business operations with our ERP solutions",
        image: ERPImage, // Replace with the actual image import
        intro: "We provide enterprise resource planning (ERP) solutions to help businesses streamline operations, improve efficiency, and reduce costs. Our ERP systems are tailored to meet the unique needs of your organization.",
        keyFeatIntro: "Our ERP solutions are designed to integrate and automate your business processes for maximum efficiency.",
        keyFeatures: [
            {
                title: "Financial Management",
                description: "Manage your finances with accurate and real-time reporting.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Supply Chain Management",
                description: "Optimize your supply chain with end-to-end visibility and control.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Human Resources",
                description: "Streamline HR processes with integrated tools for payroll, recruitment, and more.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Inventory Management",
                description: "Track and manage inventory in real-time for better decision-making.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Customer Relationship Management",
                description: "Enhance customer satisfaction with integrated CRM tools.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Customization",
                description: "Tailor your ERP system to meet your specific business needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you streamline your business operations with powerful ERP solutions.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Efficiency",
                description: "Automate and streamline your business processes for better efficiency.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Real-Time Insights",
                description: "Gain real-time insights into your business operations for better decision-making.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build an ERP system that grows with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering ERP solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create an intuitive and engaging experience for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge ERP features.",
            },
        ]
    },
    {
        id: 19,
        url: "/solutions/e-learning",
        title: "E-Learning",
        description: "Deliver engaging and effective online learning experiences",
        image: ELearningImage, // Replace with the actual image import
        intro: "We provide e-learning solutions to help businesses and educational institutions deliver engaging and effective online learning experiences. Our platforms are designed to meet the needs of learners and educators alike.",
        keyFeatIntro: "Our e-learning solutions are designed to create interactive and impactful learning experiences.",
        keyFeatures: [
            {
                title: "Learning Management System",
                description: "Manage and deliver courses with a robust LMS platform.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Interactive Content",
                description: "Create engaging and interactive learning materials.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Mobile Learning",
                description: "Enable learning on-the-go with mobile-friendly platforms.",
                icon: <Smartphone className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Assessment & Feedback",
                description: "Evaluate learner progress with quizzes, tests, and feedback tools.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Collaboration Tools",
                description: "Facilitate collaboration among learners and educators.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Analytics & Reporting",
                description: "Track learner progress and performance with advanced analytics.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you deliver impactful and engaging e-learning experiences.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Engaging Content",
                description: "Create interactive and engaging learning materials.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Flexible Learning",
                description: "Enable learning anytime, anywhere with mobile-friendly platforms.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build an e-learning platform that grows with your needs.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Reach",
                description: "Deliver learning experiences to a global audience.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create an intuitive and engaging experience for learners.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge e-learning features.",
            },
        ]
    },
    {
        id: 20,
        url: "/solutions/document-management",
        title: "Document Management",
        description: "Organize and manage your documents efficiently",
        image: DocumentManagementImage, // Replace with the actual image import
        intro: "We provide document management solutions to help businesses organize, store, and retrieve documents efficiently. Our systems are designed to improve productivity and ensure compliance with regulatory requirements.",
        keyFeatIntro: "Our document management solutions are designed to streamline your document workflows.",
        keyFeatures: [
            {
                title: "Document Storage",
                description: "Store and organize documents securely in a centralized repository.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Document Retrieval",
                description: "Quickly retrieve documents with advanced search and indexing features.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Version Control",
                description: "Track and manage document versions for better collaboration.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Security & Compliance",
                description: "Ensure document security and compliance with regulatory standards.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Workflow Automation",
                description: "Automate document workflows for improved efficiency.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Integration",
                description: "Integrate with other business systems for seamless document management.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you organize and manage your documents efficiently with our solutions.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Productivity",
                description: "Streamline document workflows for better efficiency.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Security",
                description: "Protect your documents with advanced security measures.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build a document management system that grows with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering document management solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create an intuitive and engaging experience for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge document management features.",
            },
        ]
    },
    {
        id: 21,
        url: "/solutions/fleet-management",
        title: "Fleet Management",
        description: "Optimize your fleet operations with our advanced management solutions",
        image: FleetManagementImage, // Replace with the actual image import
        intro: "We provide fleet management solutions to help businesses optimize their vehicle operations, reduce costs, and improve efficiency. Our systems are designed to provide real-time insights and control over your fleet.",
        keyFeatIntro: "Our fleet management solutions are designed to streamline your operations and maximize efficiency.",
        keyFeatures: [
            {
                title: "Real-Time Tracking",
                description: "Track your fleet in real-time for better visibility and control.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Route Optimization",
                description: "Optimize routes to reduce fuel consumption and improve delivery times.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Maintenance Scheduling",
                description: "Schedule and track vehicle maintenance to ensure optimal performance.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Driver Management",
                description: "Monitor driver behavior and improve safety with advanced tools.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Fuel Management",
                description: "Track and optimize fuel usage to reduce costs.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Reporting & Analytics",
                description: "Gain insights into fleet performance with detailed reports and analytics.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you optimize your fleet operations with advanced management solutions.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Efficiency",
                description: "Streamline fleet operations for better efficiency and cost savings.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Safety",
                description: "Improve driver safety with real-time monitoring and feedback.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build a fleet management system that grows with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering fleet management solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create an intuitive and engaging experience for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge fleet management features.",
            },
        ]
    },
    {
        id: 22,
        url: "/solutions/kiosk-software",
        title: "Kiosk Software",
        description: "Deliver seamless self-service experiences with our kiosk solutions",
        image: KioskSoftwareImage, // Replace with the actual image import
        intro: "We provide kiosk software solutions to help businesses deliver seamless self-service experiences. Our kiosk systems are designed to enhance customer engagement and streamline operations.",
        keyFeatIntro: "Our kiosk software solutions are designed to create intuitive and engaging self-service experiences.",
        keyFeatures: [
            {
                title: "Customizable Interfaces",
                description: "Design kiosk interfaces tailored to your brand and customer needs.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Touchscreen Integration",
                description: "Enable intuitive touchscreen interactions for a seamless user experience.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Payment Processing",
                description: "Integrate secure payment processing for transactions.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Remote Management",
                description: "Manage and update kiosks remotely for better control and efficiency.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Analytics & Reporting",
                description: "Track kiosk usage and performance with detailed analytics.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Security Features",
                description: "Protect your kiosks with advanced security measures.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you deliver seamless self-service experiences with our kiosk solutions.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Customer Engagement",
                description: "Create engaging and intuitive self-service experiences for your customers.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Efficiency",
                description: "Streamline operations with self-service kiosks.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build a kiosk system that grows with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering kiosk solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create an intuitive and engaging experience for your customers.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge kiosk features.",
            },
        ]
    },
    {
        id: 23,
        url: "/solutions/cms",
        title: "CMS",
        description: "Manage your content efficiently with our CMS solutions",
        image: CMSImage, // Replace with the actual image import
        intro: "We provide content management system (CMS) solutions to help businesses create, manage, and publish content efficiently. Our CMS platforms are designed to meet the needs of content creators and marketers.",
        keyFeatIntro: "Our CMS solutions are designed to streamline content creation and management.",
        keyFeatures: [
            {
                title: "Content Creation",
                description: "Create and edit content with an intuitive and user-friendly interface.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Content Publishing",
                description: "Publish content quickly and efficiently across multiple platforms.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "SEO Tools",
                description: "Optimize your content for search engines with built-in SEO tools.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "User Management",
                description: "Manage user roles and permissions for better collaboration.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Analytics & Reporting",
                description: "Track content performance with detailed analytics and reports.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Customization",
                description: "Tailor your CMS platform to meet your specific business needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you manage your content efficiently with our CMS solutions.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Efficiency",
                description: "Streamline content creation and publishing processes.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Collaboration",
                description: "Enable better collaboration with user management tools.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build a CMS platform that grows with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering CMS solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create an intuitive and engaging experience for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge CMS features.",
            },
        ]
    },
    {
        id: 24,
        url: "/solutions/web-portals",
        title: "Web Portals",
        description: "Build powerful and engaging web portals for your business",
        image: WebPortalsImage, // Replace with the actual image import
        intro: "We provide web portal solutions to help businesses create powerful and engaging online platforms. Our portals are designed to meet the needs of users and administrators alike.",
        keyFeatIntro: "Our web portal solutions are designed to deliver seamless and engaging user experiences.",
        keyFeatures: [
            {
                title: "Custom Development",
                description: "Build web portals tailored to your specific business needs.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "User Authentication",
                description: "Enable secure user authentication and access control.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Content Management",
                description: "Manage and publish content efficiently with integrated CMS tools.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Integration",
                description: "Integrate with other business systems for seamless operations.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Analytics & Reporting",
                description: "Track portal usage and performance with detailed analytics.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Responsive Design",
                description: "Ensure your portal works seamlessly across all devices.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you build powerful and engaging web portals for your business.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved User Engagement",
                description: "Create engaging and intuitive web portals for your users.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Security",
                description: "Protect your portal with advanced security measures.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build a web portal that grows with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering web portal solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create an intuitive and engaging experience for your users.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge web portal features.",
            },
        ]
    },
    {
        id: 25,
        url: "/solutions/asset-management",
        title: "Asset Management",
        description: "Manage your assets efficiently with our advanced solutions",
        image: AssetManagementImage, // Replace with the actual image import
        intro: "We provide asset management solutions to help businesses track, manage, and optimize their assets. Our systems are designed to improve efficiency and reduce costs.",
        keyFeatIntro: "Our asset management solutions are designed to streamline your asset tracking and management processes.",
        keyFeatures: [
            {
                title: "Asset Tracking",
                description: "Track your assets in real-time for better visibility and control.",
                icon: <Globe className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            },
            {
                title: "Maintenance Scheduling",
                description: "Schedule and track asset maintenance to ensure optimal performance.",
                icon: <Code className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
            },
            {
                title: "Inventory Management",
                description: "Manage your asset inventory with real-time updates and tracking.",
                icon: <BarChart className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
            },
            {
                title: "Reporting & Analytics",
                description: "Gain insights into asset performance with detailed reports and analytics.",
                icon: <Shield className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-amber-500 to-yellow-400",
            },
            {
                title: "Integration",
                description: "Integrate with other business systems for seamless asset management.",
                icon: <Zap className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-red-500 to-rose-500",
            },
            {
                title: "Customization",
                description: "Tailor your asset management system to meet your specific business needs.",
                icon: <Check className="h-6 w-6 text-white" />,
                gradient: "bg-gradient-to-br from-emerald-500 to-green-500",
            },
        ],
        whyChooseSubHeading: "We help you manage your assets efficiently with our advanced solutions.",
        whyChoose: [
            {
                icon: <Rocket className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Improved Efficiency",
                description: "Streamline asset tracking and management processes.",
            },
            {
                icon: <Shield className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Enhanced Visibility",
                description: "Gain real-time visibility into your assets for better decision-making.",
            },
            {
                icon: <Code className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Scalable Solutions",
                description: "Build an asset management system that grows with your business.",
            },
            {
                icon: <Globe className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Global Expertise",
                description: "Leverage our experience in delivering asset management solutions worldwide.",
            },
            {
                icon: <Check className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "User-Friendly Design",
                description: "Create an intuitive and engaging experience for your team.",
            },
            {
                icon: <Lightbulb className="h-6 w-6 text-primary flex-shrink-0" />,
                title: "Innovative Features",
                description: "Stay ahead of the competition with cutting-edge asset management features.",
            },
        ]
    },
];