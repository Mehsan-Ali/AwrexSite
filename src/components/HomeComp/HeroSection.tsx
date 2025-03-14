import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function GradientBackground() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-r from-[#01151f] via-black to-[#01151f]">
            {/* Vertical lines in center */}
            <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 space-x-10">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="h-[25rem] w-[1px] bg-gradient-to-b from-[#ffffff1e] to-transparent"
                    />
                ))}
            </div>

            <div className="absolute left-1/2 bottom-0 flex -translate-x-1/2 space-x-10">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="h-[15rem] w-[1px] bg-gradient-to-t from-[#ffffff1e] to-transparent"
                        style={{
                            boxShadow: "0 0 10px rgba(1, 12, 56, 0.87)",
                        }}
                    />
                ))}
            </div>

            {/* Left side diagonal bottom lines */}
            <div className="absolute left-0 bottom-0 h-full w-1/2">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-[100%] w-[1px] origin-bottom-left rotate-[-45deg] bg-gradient-to-br from-[#ffffff1e] to-transparent"
                        style={{
                            left: `${(i + 1) * 15}%`,
                            boxShadow: "0 0 5px rgba(0, 11, 60, 0.5)",
                        }}
                    />
                ))}
            </div>

            {/* Right side diagonal lines */}
            <div className="absolute right-0 top-0 h-full w-1/2">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-[200%] w-[1px] origin-top-right -rotate-[45deg] bg-gradient-to-br from-[#ffffff1e] to-transparent"
                        style={{
                            right: `${(i + 1) * 15}%`,
                            boxShadow: "0 0 5px rgba(0, 11, 60, 0.5)",
                        }}
                    />
                ))}
            </div>

            {/* Content container */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center">
                {/* Top tag/button */}
                <a
                    href="#plans"
                    className="mb-8 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                    Flexible Plans for Custom Software Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                {/* Main heading */}
                <div className="mb-6 text-center font-sans text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    We Build Scalable
                    <br />
                    <h1 className="bg-gradient-to-b text-transparent bg-clip-text from-gray-100 to-transparent">
                        Web & App Development Solutions
                    </h1>
                </div>

                {/* Supporting text */}
                <h2 className="mb-12 max-w-2xl text-base sm:text-lg text-gray-500">
                    Specializing in custom software development, system design, and DevOps, we deliver cutting-edge digital products that drive business growth and efficiency.
                </h2>

                {/* CTA buttons */}
                <div className="flex flex-wrap items-center text-sm sm:text-base justify-center font-semibold gap-4">
                    <button className="bg-zinc-800 cursor-pointer text-white hover:bg-zinc-700 px-4 py-2 sm:py-3 rounded-lg">
                        <NavLink to={'/contact-us'}>
                            Start Your Software Project
                        </NavLink>
                    </button>
                    <button className="border-white cursor-pointer bg-white px-4 py-2 sm:py-3 rounded-lg text-black hover:bg-white hover:text-black">
                        <NavLink to={'/schedule'}>
                            Book a Free Consultation
                        </NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
}