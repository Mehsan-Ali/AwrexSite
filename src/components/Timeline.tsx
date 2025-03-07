"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import Optimize from '../assets/optimization.png'
import Scale from '../assets/bar-chart.png'
import Execute from '../assets/execute.png'
import Idea from '../assets/idea.png'
import Plan from '../assets/task.png'
import Support from '../assets/support.png'
// const timelineEvents = [
//     {
//         year: 2018,
//         title: "Flowers & Saints Founded",
//         description: "Our journey began with a passion for minimal design and floral artistry.",
//         details:
//             "Founded by Jane Doe and John Smith, Flowers & Saints started as a small studio in Sydney's Surry Hills, combining their love for minimalist design and botanical beauty.",
//     },
//     {
//         year: 2019,
//         title: "First Major Exhibition",
//         description: "Showcased our unique blend of digital art and floral arrangements at the Sydney Design Festival.",
//         details:
//             "Our exhibition 'Digital Bloom' attracted over 10,000 visitors and received critical acclaim for its innovative approach to merging technology with natural elements.",
//     },
//     {
//         year: 2020,
//         title: "Launch of Online Store",
//         description: "Expanded our reach by bringing our creations to the digital world.",
//         details:
//             "In response to global changes, we pivoted to e-commerce, offering our unique designs and virtual floral workshops to a worldwide audience.",
//     },
//     {
//         year: 2021,
//         title: "Collaboration with Top Brands",
//         description: "Partnered with leading lifestyle brands to create exclusive collections.",
//         details:
//             "Our collaborations included limited edition prints with Australian fashion label Zimmermann and a bespoke fragrance line with Aesop.",
//     },
//     {
//         year: 2022,
//         title: "International Recognition",
//         description: "Received the prestigious International Floral Design Award.",
//         details:
//             "Our 'Ethereal Echoes' installation, which combined holographic projections with live flowers, won the gold medal at the Chelsea Flower Show.",
//     },
//     {
//         year: 2023,
//         title: "Expansion to Physical Stores",
//         description: "Opened our first flagship store in the heart of Sydney.",
//         details:
//             "Our Bondi Beach location features an immersive retail experience, blending digital installations with a curated selection of floral arrangements and lifestyle products.",
//     },
// ]

const timelineEvents = [
    {
        title: "Idea",
        description: "We can turn your Ideas into remarkable IT solutions with proficient problem-solving. Our creative team brainstorms and help transform Ideas into reality.",
        icon: Idea,
        details: "Our process begins with brainstorming and conceptualizing innovative IT solutions tailored to meet specific client needs."
    },
    {
        title: "Plan",
        description: "Bringing the Ideas to life require meticulous Planning, we will be with you every step of the way to lay down strategic Plans and get you across the line.",
        icon: Plan,
        details: "We create detailed project plans, including timelines, resource allocation, and risk management strategies to ensure smooth execution."
    },
    {
        title: "Execute",
        description: "We don’t just talk the talk! we walk the walk and an extra mile to ensure flawless Execution resulting in a fit for purpose solution.",
        icon: Execute,
        details: "Our team of experts implements the planned solutions with precision, adhering to best practices and industry standards."
    },
    {
        title: "Optimize",
        description: "Refining and improving the solution for efficiency.",
        icon: Optimize,
        details: "We continuously monitor and optimize the solution to enhance performance, scalability, and user experience."
    },
    {
        title: "Scale",
        description: "Expanding and adapting for growth.",
        icon: Scale,
        details: "As the solution gains traction, we scale it to accommodate increasing demands and evolving business requirements."
    },
    {
        title: "Support",
        description: "Ongoing maintenance and support keep your software running smoothly and up-to-date.",
        icon: Support,
        details: "We offer ongoing support and maintenance to ensure the solution remains effective and up-to-date with the latest technological advancements."
    }
];

const FlowerIcon = ({ progress }: { progress: number }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        style={{ transform: `scale(${progress})` }}
    >
        <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path
            d="M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z"
            stroke="currentColor"
            strokeWidth="2"
        />
    </svg>
)

export default function Timeline() {
    const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <section ref={containerRef} className="py-20 bg-[#000000] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-[#E5E5E5] sm:text-4xl">Our Process</h2>
                    <p className="mt-4 text-lg text-[#B3B3B3]">A transparent, collaborative approach that ensures we deliver exactly what you need.</p>
                </motion.div>

                <div className="relative">
                    {/* Vertical line */}
                    <motion.div
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#ffffff]"
                        style={{ scaleY: scaleX }}
                    />

                    {/* Flower icon */}
                    <motion.div
                        className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-[#FFFFFF]"
                        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
                    >
                        <FlowerIcon progress={useTransform(scrollYProgress, [0, 1], [0.5, 1]) as any} />
                    </motion.div>

                    {timelineEvents.map((event, index) => (
                        <TimelineEvent
                            key={event.title}
                            event={event}
                            index={index}
                            isExpanded={expandedEvent === index}
                            onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function TimelineEvent({
    event,
    index,
    isExpanded,
    onToggle,
}: {
    event: (typeof timelineEvents)[0]
    index: number
    isExpanded: boolean
    onToggle: () => void
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    return (
        <motion.div
            ref={ref}
            className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
        >
            <div className="w-5/12" />
            <div className="z-20">
                <div className="flex items-center justify-center w-8 h-8 bg-[#ffffff] rounded-full">
                    <div className="w-3 h-3 bg-[#111113] rounded-full" />
                </div>
            </div>
            <motion.div
                className="w-5/12 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onToggle}
            >
                <div className="p-5 bg-[#09090B] rounded-lg shadow-md border border-[#101012]">
                    <div className="flex space-x-2 items-center py-2">
                        <img src={event.icon} alt="" className="size-8" />
                        <h5 className="text-lg font-semibold text-[#FFFFFF] mb-1">{event.title}</h5>
                    </div>

                    <p className="text-[#B3B3B3]">{event.description}</p>
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="mt-2 text-sm text-[#B3B3B3]">{event.details}</p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    )
}
