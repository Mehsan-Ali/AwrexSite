import { useState } from 'react'
// import HeadingLogo from '../../assets/Heading.png'
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react'

const FaqLandingPage = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null); // Allow string or null
    const toggleShow = (id: number) => {
        setActiveFaq((prevId) => (prevId === id ? null : id)); // Toggle the active FAQ
    };

    return (
        <div className='px-5 sm:px-0 pb-16'>

            <div className='flex justify-center md:flex-nowrap flex-wrap'>
                <div className='order-2 space-y-3 flex flex-col items-center'>
                    <h1 className='text-xl sm:text-4xl font-bold max-w-[50rem] text-center bg-gradient-to-r from-gray-950 to-slate-100 text-transparent capitalize bg-clip-text py-2'>Frequently Asked Questions</h1>
                    <p className='text-lg text-center'>Find answers to common questions about our services and process.</p>
                </div>
            </div>

            {/* ----------------- FAQ Section ------------------- */}
            <div className="pt-10 flex flex-grow flex-col gap-5">
                {faqData.map((item) => (
                    <div
                        key={item.id}
                        className={`flex gap-x-5 border-b border-gray-300 pb-6 items-start cursor-pointer max-w-2xl md:max-w-4xl mx-auto`}
                        onClick={() => toggleShow(item.id)}
                    >
                        <span className='order-1 text-gray-500'>
                            {activeFaq === item.id ? (
                                <ChevronUp size={22} />
                            ) : (
                                // <ArrowDown size={22} />
                                <ChevronDown size={22} />
                            )}
                        </span>
                        <div className=''>
                            <p className='font-semibold text-base text-gray-900 sm:text-xl'>{item.question}</p>
                            <motion.div
                                initial={{ opacity: 0, y: -20, height: 0 }}
                                animate={
                                    activeFaq === item.id
                                        ? { opacity: 1, y: 0, height: "auto" }
                                        : { opacity: 0, y: -20, height: 0 }
                                }
                                transition={{
                                    duration: 0.6,
                                    ease: "easeInOut",
                                }}
                                className="overflow-hidden"
                            >
                                <p className="pt-2 text-gray-500">{item.answer}</p>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FaqLandingPage

const faqData = [
    {
        id: 1,
        question: "How long does it take to complete a project?",
        answer: "The timeline varies based on the project's complexity. We provide a detailed project plan and milestones during the initial consultation."
    },
    {
        id: 2,
        question: "Do you provide custom software development?",
        answer: "Yes, we offer custom software development tailored to your business needs, ensuring scalability, efficiency, and innovation."
    },
    {
        id: 3,
        question: "Do you optimize websites for SEO?",
        answer: "Yes, we follow SEO best practices to ensure your website ranks well on search engines and attracts organic traffic."
    },
    {
        id: 4,
        question: "Can you develop both iOS and Android apps?",
        answer: "Yes, we develop native apps for both platforms as well as cross-platform apps using frameworks like Flutter and React Native."
    },
    {
        id: 5,
        question: "What is your approach to system design?",
        answer: "We focus on creating scalable, secure, and efficient systems using microservices, REST APIs, cloud-native architectures, and modern DevOps practices."
    },
    {
        id: 6,
        question: "Do you offer UI/UX design services?",
        answer: "Yes, we provide UI/UX design services to create intuitive, user-friendly interfaces that enhance user engagement and satisfaction."
    },
    {
        id: 7,
        question: "How do you ensure the quality of your work?",
        answer: "We follow Agile methodologies, conduct rigorous testing, and adhere to industry best practices to deliver high-quality solutions."
    },
    {
        id: 8,
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we offer post-development support and maintenance to ensure your software, app, or website remains functional and up-to-date."
    },
    {
        id: 9,
        question: "What is your pricing model?",
        answer: "Our pricing depends on the project scope and complexity. We offer flexible models, including fixed-price, hourly rates, and dedicated team options."
    },
    {
        id: 10,
        question: "Can you redesign or upgrade an existing system?",
        answer: "Absolutely! We specialize in modernizing and upgrading existing systems to improve performance, scalability, and user experience."
    },
    {
        id: 11,
        question: "How do you handle project communication and updates?",
        answer: "We use tools like Slack, Zoom, and project management platforms (e.g., Jira, Trello) to provide regular updates and maintain transparent communication."
    },
    {
        id: 12,
        question: "What industries do you cater to?",
        answer: "We work with clients across various industries, including healthcare, e-commerce, education, finance, and more, delivering tailored solutions for each sector."
    }
];