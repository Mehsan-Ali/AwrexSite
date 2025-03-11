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
    { id: 1, question: "What is SOIFS?", answer: "The Sustainable Organic Integrated Farming System (SOIFS) is an innovative farming model developed by Al Ikhwan Farms (AIF). It integrates aquaculture, agriculture, livestock farming, and renewable energy production to create a self-sustaining ecosystem." },
    { id: 2, question: "How can I get involved?", answer: "You can get involved with SOIFS in various ways! Whether you're a farmer, investor, or student, we welcome your participation." },
    { id: 3, question: "What are the benefits of integrated farming?", answer: "Integrated farming combines different agricultural systems, ensuring mutual support between them. It reduces waste, improves efficiency, and enhances profitability." },
    { id: 4, question: "How does SOIFS promote sustainability?", answer: "SOIFS promotes sustainability by reducing reliance on synthetic inputs, reusing resources like water and organic waste, and enhancing biodiversity." },
    { id: 5, question: "What types of crops, livestock, and aquaculture does SOIFS support?", answer: "SOIFS supports a wide range of crops, including vegetables, fruits, and grains. Livestock includes dairy and fattening cattle and goats, and aquaculture includes fish species raised in our ponds." },
    { id: 6, question: "How do biogas systems work in SOIFS?", answer: "Biogas systems in SOIFS convert organic waste into renewable energy. These systems produce biogas to power farm operations and bio-slurry, a nutrient-rich fertilizer." },
    { id: 7, question: "What role does water recycling play in SOIFS?", answer: "Water recycling is a cornerstone of SOIFS. We treat and reuse water from fishponds and other farm operations for irrigation and aquaculture." },
    { id: 8, question: "How does SOIFS help smallholder farmers?", answer: "SOIFS empowers smallholder farmers by providing sustainable farming models that reduce input costs and improve yields." },
    { id: 9, question: "What products does SOIFS produce?", answer: "SOIFS produces a variety of organic and sustainable products, including fish, poultry, dairy, honey, fruits, vegetables, grains, mushrooms, spirulina, and renewable biogas energy." },
    { id: 10, question: "What is the impact of SOIFS on the environment?", answer: "SOIFS reduces environmental impact by promoting organic farming, recycling water, generating renewable energy, and sequestering carbon through tree planting." },
];
