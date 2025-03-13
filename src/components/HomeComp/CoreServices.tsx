"use client"
import {  Code, Globe, Settings, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

export default function CoreServices() {
    const services = [
        // {
        //     icon: Monitor,
        //     // url: "",
        //     title: "Interface Design",
        //     description: "Creating intuitive and engaging user experiences through modern interface design principles, focusing on usability, accessibility, and responsive design to enhance user satisfaction and drive engagement.",
        //     color: "#60A5FA", // Lighter blue for better contrast
        //     bgColor: "rgba(96, 165, 250, 0.1)", // Semi-transparent background
        //     borderColor: "rgba(96, 165, 250, 0.2)", // Subtle border
        // },
        {
            icon: Code,
            url: "/services/software-development",
            title: "Software Development",
            description: "Building robust and scalable software solutions tailored to your business needs, leveraging cutting-edge technologies, agile methodologies, and cloud-based infrastructure to ensure efficiency, flexibility, and long-term growth.",
            color: "#34D399", // Lighter green
            bgColor: "rgba(52, 211, 153, 0.1)",
            borderColor: "rgba(52, 211, 153, 0.2)",
        },
        {
            icon: RefreshCw,
            url: "/services/systems-re-engineering",
            title: "Systems Re-Engineering",
            description: "Revitalizing and modernizing your existing systems through comprehensive re-engineering, ensuring improved performance, scalability, and adaptability to meet evolving business demands and technological advancements.",
            color: "#F59E0B", // Amber
            bgColor: "rgba(245, 158, 11, 0.1)",
            borderColor: "rgba(245, 158, 11, 0.2)",
        },
        {
            icon: Globe,
            url: "/services/web-development-maintenance",
            title: "Web Development & Maintenance",
            description: "Developing responsive and dynamic web applications that deliver seamless user experiences, fast performance, and cross-device compatibility, ensuring scalability, accessibility, and engagement for modern businesses.",
            color: "#F87171", // Lighter red
            bgColor: "rgba(248, 113, 113, 0.1)",
            borderColor: "rgba(248, 113, 113, 0.2)",
        },
        {
            icon: Settings,
            url: "/consulation/managed-it-services",
            title: "Managed IT Services",
            description: "Providing end-to-end IT management and support to optimize your business operations, enhance productivity, and ensure seamless technology performance through proactive monitoring, maintenance, and expert solutions.",
            color: "#3B82F6", // Lighter blue
            bgColor: "rgba(59, 130, 246, 0.1)",
            borderColor: "rgba(59, 130, 246, 0.2)",
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-gray-950 to-white bg-clip-text text-transparent ">
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
                            className=" border-gray-300 cursor-pointer transition-all duration-300 border-b"
                        >
                            <NavLink to={service.url} className="flex flex-col h-full">
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
                            </NavLink>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}