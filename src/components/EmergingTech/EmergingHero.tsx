import { ArrowRight, Badge } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const EmergingHero = ({ solution }: { solution: any }) => {
    return (
        <>
            <div className="sm:px-14 px-5 py-20 md:py-0 text-black min-h-screen grid gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col justify-center space-y-2">
                    <span className="flex items-center gap-2 bg-slate-600 w-fit px-3 py-1 rounded-full">
                        <Badge className="w-4 h-4 text-white" />
                        <h3 className="text-sm md:text-base text-white">
                            {solution.title}
                        </h3>
                    </span>

                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-100 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                        {solution.title}
                    </h1>
                    <p className="max-w-[600px] font-semibold text-slate-900 text-base md:text-lg lg:text-xl">
                        {solution.description}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base">
                        {solution.intro}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-300 cursor-pointer">
                            <NavLink to={`/schedule`}>
                                Schedule a Meeting
                            </NavLink>
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                        <button className="flex items-center justify-center border border-slate-500 text-black hover:bg-slate-700 px-6 py-2 rounded-lg hover:text-white cursor-pointer transition duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-xl">
                        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-blue-700/20 blur-3xl" />
                        <img
                            src={solution.image}
                            alt={solution.title}
                            title={solution.title}
                            width={600}
                            height={600}
                            className="relative z-10 rounded-2xl object-cover w-full h-full"
                            loading='lazy'
                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default EmergingHero