"use client"
import { motion } from "framer-motion"
import { ArrowRight, Globe, Lightbulb, Users } from "lucide-react"

export default function ModernAbout() {
    const features = [
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Innovation First",
            description: "Transforming ideas into digital reality",
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Expert Team",
            description: "Dedicated professionals at your service",
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Global Reach",
            description: "Solutions that transcend boundaries",
        },
    ]

    return (
        // <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
        // <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-r from-[#01151f] via-black to-[#01151f]">
        <section className="relative min-h-screen flex items-center py-20 overflow-hidden bgwhite">

            <div className="container relative mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-blue-400 text-sm font-medium">About Awrex Solutions</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-100">
                            We are Partner of Your Innovations
                        </h1>

                        <p className="text-lg text-slate-500 leading-relaxed">
                            Awrex Solutions is a pioneering force in United Kingdom's IT landscape, dedicated to fostering professional
                            excellence and innovative corporate culture across the region.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-500 flex justify-between items-center p-3 rounded-lg hover:bg-blue-600 text-white">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                            <button className="border-blue-500/20 text-blue-400 hover:bg-blue-500/10">
                                Learn More
                            </button>
                        </div>
                    </motion.div>

                    {/* Right content - Features grid */}
                    <div className="grid gap-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
                                <div className="relative bg-slate-900 backdrop-blur-sm border border-blue-500/10 rounded-xl p-6 transition-all duration-300 hover:border-blue-500 hover:bg-slate-800">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">{feature.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-1">{feature.title}</h3>
                                            <p className="text-slate-400">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Stats card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="relative mt-6"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-black to-black rounded-xl blur-xl" />
                            <div className="relative bg-slate-900 backdrop-blur-sm border border-blue-500 rounded-xl p-6">
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-3xl font-bold text-white mb-1">25+</div>
                                        <div className="text-slate-400">Years Experience</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-white mb-1">500+</div>
                                        <div className="text-slate-400">Projects Delivered</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}