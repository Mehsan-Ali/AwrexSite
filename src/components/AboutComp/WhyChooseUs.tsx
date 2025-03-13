import { Clock, Cpu, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
    // const benefits = [
    
    //     {
    //         title: "Custom Solutions",
    //         description: "Tailored software that perfectly fits your unique business needs",
    //         icon: <Cpu color="#00524c" className="size-8 sm:size-10" />,
    //         axis: -50,
    //     },
    //     {
    //         title: "Agile Development",
    //         description: "Flexible, iterative approach that adapts to changing requirements",
    //         icon: <Zap color="#00524c" className="size-8 sm:size-10" />,
    //         axis: 50,
    //     },
    //     {
    //         title: "Dedicated Support",
    //         description: "Ongoing maintenance and support to ensure your software runs smoothly",
    //         icon: <Shield color="#00524c" className="size-8 sm:size-10" />,
    //         axis: -50,
    //     },
    //     {
    //         title: "Cutting-Edge Tech",
    //         description: "Latest technologies and frameworks to future-proof your investment.",
    //         icon: <Clock color="#00524c" className="size-8 sm:size-10" />,
    //         axis: 50,
    //     },
    // ];
    const benefits = [
        {
            title: "Custom Software Solutions",
            description: "We deliver tailored software solutions designed to meet your unique business requirements, ensuring maximum efficiency and scalability.",
            icon: <Cpu color="#00524c" className="size-8 sm:size-10" />,
            axis: -50,
        },
        {
            title: "Agile Software Development",
            description: "Our agile development process ensures flexibility and adaptability, allowing us to respond quickly to changing business needs and deliver high-quality results.",
            icon: <Zap color="#00524c" className="size-8 sm:size-10" />,
            axis: 50,
        },
        {
            title: "Dedicated Software Support",
            description: "We provide ongoing maintenance and dedicated support to ensure your software operates seamlessly, minimizing downtime and maximizing productivity.",
            icon: <Shield color="#00524c" className="size-8 sm:size-10" />,
            axis: -50,
        },
        {
            title: "Cutting-Edge Technology",
            description: "Leverage the latest technologies and frameworks to future-proof your software investment and stay ahead of the competition.",
            icon: <Clock color="#00524c" className="size-8 sm:size-10" />,
            axis: 50,
        },
    ];
    return (

        <section className="container mx-auto py-12 px-4 md:py-20 overflow-hidden">

            {/* ----------------- Our Heading ----------------- */}

            <div className="px-2 sm:px-10 flex flex-col justify-center overflow-hidden items-center gap-2 mb-12">
                <motion.div className="grid place-items-center gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-gray-950 to-blue-100 bg-clip-text text-transparent">
                        Why Choose Us
                    </h2>
                    <h4 className="text-sm text-center tracking-widest sm:text-base">
                        We combine technical expertise with business acumen to deliver solutions that drive real results.
                    </h4>
                </motion.div>
            </div>

            {/* Benefits Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        className="border border-gray-300 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, x: benefit.axis },
                            visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex flex-col gap-3 items-center text-center">
                            <span className="bg-zinc-100 rounded-full p-3 flex justify-center items-center">
                                {benefit.icon}
                            </span>
                            <span>
                                <h2 className="text-lg text-gray-600 font-semibold">{benefit.title}</h2>
                                <h3 className="text-gray-400 mt-1 text-sm">{benefit.description}</h3>
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}
