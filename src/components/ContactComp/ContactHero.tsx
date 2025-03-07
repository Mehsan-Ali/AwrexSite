import { MessageSquare } from 'lucide-react'

const ContactHero = () => {
    return (
        <section className='flex flex-col bg-gradient-to-r from-[#01151f] via-black to-[#01151f] space-y-5 px-5 justify-center items-center py-14'>
            <span className='flex gap-3 items-center bg-gray-900 px-3 py-1 sm:px-5 sm:py-2 rounded-xl text-gray-300 text-xs sm:text-sm font-light'>
                <MessageSquare className='text-slate-400' />
                We'd love to hear from you
            </span>

            <div className='max-w-2xl text-center'>
                <h3 className='text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-100'>Get in Touch With Our Team </h3>
                <p className='text-sm sm:text-lg text-slate-500 leading-relaxed'>Have a question, project idea, or want to work with us? Reach out and we'll get back to you as soon as possible.</p>
            </div>

        </section>
    )
}

export default ContactHero
