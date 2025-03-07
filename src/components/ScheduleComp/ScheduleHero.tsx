import { MessageSquare } from "lucide-react";
export default function ScheduleHero() {
    return (

        <section className='flex flex-col bg-gradient-to-r from-[#01151f] via-black to-[#01151f] space-y-5 px-5 justify-center items-center py-14'>
            <span className='flex gap-3 items-center bg-gray-900 px-3 py-1 sm:px-5 sm:py-2 rounded-xl text-gray-300 text-xs sm:text-sm font-thin'>
                <MessageSquare className='text-slate-400' />
                We'd love to hear from you
            </span>

            <div className='max-w-3xl text-center'>
                <h3 className='text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-100'>Schedule a Consultation</h3>
                <p className='text-sm sm:text-lg text-slate-500 leading-relaxed'>Let's discuss your project needs and how we can help bring your vision to life.</p>
            </div>

        </section>
    );
}