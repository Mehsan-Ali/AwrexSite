import AboutImage from '../../assets/AboutHero.webp'

const AboutHero = () => {
    return (
        <div className='min-h-screen bg-gradient-to-r from-[#ffffff] to-[#e6e6e6] flex justify-center items-center flex-wrap md:flex-nowrap px-5 space-y-5'>
            <section className='flex flex-col justify-center pt-16 sm:pt-0 items-start space-y-5'>
                <div>
                    <h5 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-950 to-slate-100 leading-14 py-3'>Transforming Ideas into Digital Reality</h5>
                    <p className='text-lg text-slate-500 leading-relaxed'>We specialize in custom software development, mobile apps, and AI-driven solutions that empower businesses to thrive in the digital age.</p>
                </div>
                <div>
                    <button className='p-3 bg-gray-900 border border-white rounded-xl text-white'>
                        Contact Us
                    </button>
                </div>
            </section>

            <section>
                <img src={AboutImage} alt=""  className="h-[80%] w-full rounded-xl object-cover" />
            </section>
        </div>
    )
}

export default AboutHero
