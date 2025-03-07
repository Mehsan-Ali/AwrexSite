"use client"
import { Monitor, Code, Globe, Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function CoreServices() {
    const services = [
        {
            icon: Monitor,
            title: "Interface Design",
            description: "Creating intuitive and engaging user experiences through modern interface design principles.",
            color: "#60A5FA", // Lighter blue for better contrast
            bgColor: "rgba(96, 165, 250, 0.1)", // Semi-transparent background
            borderColor: "rgba(96, 165, 250, 0.2)", // Subtle border
        },
        {
            icon: Code,
            title: "Software Development",
            description: "Building robust and scalable software solutions tailored to your business needs.",
            color: "#34D399", // Lighter green
            bgColor: "rgba(52, 211, 153, 0.1)",
            borderColor: "rgba(52, 211, 153, 0.2)",
        },
        {
            icon: Globe,
            title: "Web Development",
            description: "Developing responsive and dynamic web applications using cutting-edge technologies.",
            color: "#F87171", // Lighter red
            bgColor: "rgba(248, 113, 113, 0.1)",
            borderColor: "rgba(248, 113, 113, 0.2)",
        },
        {
            icon: Shield,
            title: "IT Security",
            description: "Protecting your digital assets with comprehensive security solutions and best practices.",
            color: "#FBBF24", // Lighter yellow
            bgColor: "rgba(251, 191, 36, 0.1)",
            borderColor: "rgba(251, 191, 36, 0.2)",
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    }

    return (
        // <section className="relative w-full min-h-screen py-20 overflow-hidden bg-[#ffffff]">
        <section className="relative w-full min-h-screen py-20 overflow-hidden bg-gradient-to-t from-gray-50 to-white">
            <div className="container relative px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    {/* <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-gray-600 mb-6"> */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-600 ">
                        Our Core IT Services
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl font-light tracking-wider mx-auto">
                        Empowering businesses with innovative technology solutions for the digital age
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 "
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: `0 10px 25px rgba(0, 0, 0, 0.2)`,
                                transition: { duration: 0.2 },
                            }}
                            className=" border-gray-300 transition-all duration-300 border-b"
                        >
                            <div className="h-full rounded-2xl p-8 flex flex-col">
                                {/* Icon Container */}
                                <div className="mb-6">
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: service.bgColor }}
                                    >
                                        <service.icon className="w-6 h-6" style={{ color: service.color }} />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold mb-3 text-gray-600">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 font-light leading-relaxed">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}