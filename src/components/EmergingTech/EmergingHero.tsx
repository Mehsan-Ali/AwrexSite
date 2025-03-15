import { ArrowRight, Badge } from 'lucide-react';
import { NavLink } from 'react-router-dom';

// Define a TypeScript interface for the service prop
interface Service {
    title: string;
    description: string;
    intro: string;
    image: string;
}

interface ServiceHeroProps {
    service: Service;
}

const ServiceHero = ({ service }: ServiceHeroProps) => {
    // Reusable styles
    const buttonStyles = "flex items-center justify-center px-6 py-2 rounded-lg transition duration-300 cursor-pointer";
    const primaryButtonStyles = `${buttonStyles} bg-blue-500 hover:bg-blue-600 text-white`;
    const secondaryButtonStyles = `${buttonStyles} border border-slate-500 text-black hover:bg-slate-700 hover:text-white`;

    return (
        <div className="sm:px-14 px-5 py-20 md:py-0 text-black min-h-screen grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left Section: Content */}
            <div className="flex flex-col justify-center space-y-2">
                {/* Badge */}
                <span className="flex items-center gap-2 bg-slate-600 w-fit px-3 py-1 rounded-full">
                    <Badge className="w-4 h-4 text-white" />
                    <h3 className="text-sm md:text-base text-white">
                        {service.title}
                    </h3>
                </span>

                {/* Title */}
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-100 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    {service.title}
                </h1>

                {/* Description */}
                <p className="max-w-[600px] font-semibold text-slate-900 text-base md:text-lg lg:text-xl">
                    {service.description}
                </p>

                {/* Intro */}
                <p className="text-gray-600 text-sm md:text-base">
                    {service.intro}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className={primaryButtonStyles}>
                        <NavLink to="/contact" className="flex items-center">
                            Schedule a Meeting
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </NavLink>
                    </button>
                    <button className={secondaryButtonStyles}>
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Right Section: Image */}
            <div className="flex items-center justify-center">
                <div className="relative w-full max-w-xl">
                    {/* Background Blur */}
                    <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-blue-700/20 blur-3xl" />

                    {/* Responsive Image */}
                    <img
                        src={service.image}
                        srcSet={`${service.image}-500.webp 500w,
                                 ${service.image}-800.webp 800w,
                                 ${service.image}-1200.webp 1200w`}
                        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                        alt={service.title}
                        title={service.title}
                        width={500}
                        height={500}
                        className="relative z-10 rounded-2xl object-cover w-full h-full"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;