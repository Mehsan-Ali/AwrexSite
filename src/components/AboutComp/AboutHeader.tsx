import { MessageSquare } from "lucide-react"

const AboutHeader = () => {
    return (
        <section className='flex flex-col bg-gradient-to-r from-[#01151f] via-black to-[#01151f] space-y-5 px-5 justify-center items-center py-14'>
            <span className='flex gap-3 items-center bg-gray-900 px-3 py-1 sm:px-5 sm:py-2 rounded-xl text-gray-300 text-xs sm:text-sm font-light'>
                <MessageSquare className='text-slate-400' />
                Recognized software agency with a proven track record.
            </span>

            <div className='max-w-3xl text-center'>
                <h3 className='text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-100 py-1'>Transforming Ideas
                    into Digital Reality</h3>
                <p className='text-sm sm:text-lg text-slate-500 leading-relaxed'>We specialize in custom software development, mobile apps, and AI-driven solutions that empower businesses to thrive in the digital age.</p>
            </div>
        </section>

    )
}

export default AboutHeader
