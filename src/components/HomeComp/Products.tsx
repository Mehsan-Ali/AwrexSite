"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ChevronRight, BarChart2, Laptop, Lightbulb, PuzzleIcon as PuzzlePiece, Link } from "lucide-react"
import HealthManagement from '../../assets/Health_Management.webp'
import PropertyManagement from '../../assets/Property_Management.jpg'
import FinancialManagement from '../../assets/Financial_Management.jpeg'
import HRManagement from '../../assets/Hr_Management.jpg'

export default function ProductsShowcase() {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    const descriptionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
            },
        },
    }

    const waveVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.5,
            },
        },
    }

    // const cardVariants = {
    //     hidden: { opacity: 0, y: 50 },
    //     visible: {
    //         opacity: 1,
    //         y: 0,
    //         transition: {
    //             duration: 0.5,
    //             ease: "easeOut",
    //         },
    //     },
    //     hover: {
    //         y: -10,
    //         boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    //         transition: {
    //             duration: 0.3,
    //             ease: "easeOut",
    //         },
    //     },
    // }

    const iconVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                type: "spring",
                stiffness: 300,
            },
        },
    }

    const products = [
        {
            title: "Financial Management",
            description:
                "In the Economy, the focus is back on profits, so that puts your financial function in the spotlight.",
            image: FinancialManagement,
            icon: <BarChart2 className="h-6 w-6" />,
            color: "bg-blue-500",
        },
        {
            title: "HR Management",
            description: "Theta is designed to be your efficient assistant just relax while theta is on work.",
            image: HRManagement,
            icon: <Laptop className="h-6 w-6" />,
            color: "bg-blue-500",
        },
        {
            title: "Property/Construction Management",
            description: "Next generation software built to streamline your real estate and construction business",
            image: PropertyManagement,
            icon: <Lightbulb className="h-6 w-6" />,
            color: "bg-blue-500",
        },
        {
            title: "Health Care Management",
            description:
                "Health Care Management aims to innovate the foundation to manage all aspects of Hospital's operations.",
            image: HealthManagement,
            icon: <PuzzlePiece className="h-6 w-6" />,
            color: "bg-blue-500",
        },
    ]

    return (
        <section className="py-16 px-5 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">

            <div className="container mx-auto relative z-10" ref={ref}>
                <motion.div className="text-center mb-16" initial="hidden" animate={controls} variants={containerVariants}>
                    <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text text-transparent" variants={titleVariants}>
                        Providing{" "}
                        <span className="relative inline-block bg-gradient-to-r from-gray-700 to-blue-100 bg-clip-text text-transparent">
                            Verity range of Products
                            <motion.svg
                                width="100%"
                                height="10"
                                viewBox="0 0 200 10"
                                className="absolute -bottom-2 left-0 w-full"
                                initial="hidden"
                                animate={controls}
                            >
                                <motion.path
                                    d="M0,5 C50,0 150,10 200,5"
                                    fill="none"
                                    stroke="#0ea5e9"
                                    strokeWidth="3"
                                    variants={waveVariants}
                                />
                            </motion.svg>
                        </span>
                    </motion.h2>
                    <motion.p className="max-w-3xl mx-auto text-gray-600 text-lg" variants={descriptionVariants}>
                        Awrex as a consultant firm creates intelligent solutions to generate value for its clients by developing management tools that enhance operations and integrate the whole Enterprise.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300"
                            // variants={cardVariants}
                            initial="hidden"
                            // animate={controls}
                            whileHover="hover"
                            onHoverStart={() => setHoveredCard(index)}
                            onHoverEnd={() => setHoveredCard(null)}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="object-cover transition-transform duration-500"
                                    style={{
                                        transform: hoveredCard === index ? "scale(1.05)" : "scale(1)",
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <motion.div
                                    className={`absolute right-4 bottom-4 ${product.color} text-white p-3 rounded-full`}
                                    variants={iconVariants}
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    {product.icon}
                                </motion.div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <Link href="#" className="inline-flex items-center text-blue-500 font-medium group">
                                    <motion.span
                                        initial={{ x: 0 }}
                                        animate={hoveredCard === index ? { x: 5 } : { x: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </motion.span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

