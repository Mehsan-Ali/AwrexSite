import { useState } from "react";

const GetInTouch = () => {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

    const handleChnage = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    console.log(formData)
    // const hand
    return (
        <header className="px-5">
            <section className="text-center">
                <h4 className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-100">Get in Touch</h4>
                <p className="text-lg text-slate-500 leading-relaxed mt-4">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
            </section>

            <section className="my-8 max-w-3xl mx-auto">
                <form action="">

                    <div className="mb-4">
                        {/* ----------- Name -------------- */}
                        <label htmlFor="name" className="block cursor-pointer mb-1 text-lg font-light text-gray-950 dark:text-gray-300">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChnage}
                            placeholder="John Doe"
                            className='w-full pl-4 pr-3 py-2 bg-white bg-opacity-50 rounded-lg border border-gray-200 focus:border-white focus:ring-4 focus:ring-gray-100 text-gray-500 placeholder-gray-400 transition duration-200'
                        />
                    </div>

                    {/* ----------- Email -------------- */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block cursor-pointer mb-1 text-lg font-light text-gray-950 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            type="text"
                            value={formData.email}
                            name="email"
                            onChange={handleChnage}
                            id="email"
                            placeholder="john@example.com"
                            className='w-full pl-4 pr-3 py-2 bg-white bg-opacity-50 rounded-lg border border-gray-200 focus:border-white focus:ring-4 focus:ring-gray-100 text-gray-500 placeholder-gray-400 transition duration-200'
                        />
                    </div>

                    {/* ----------- Subject -------------- */}
                    <div className="mb-4">
                        <label htmlFor="subject" className="block cursor-pointer mb-1 text-lg font-light text-gray-950 dark:text-gray-300">
                            Subject
                        </label>
                        <input
                            type="text"
                            value={formData.subject}
                            name="subject"
                            onChange={handleChnage}
                            id="subject"
                            placeholder="I'm interested in..."
                            className='w-full pl-4 pr-3 py-2 bg-white bg-opacity-50 rounded-lg border border-gray-200 focus:border-white focus:ring-4 focus:ring-gray-100 text-gray-500 placeholder-gray-400 transition duration-200'
                        />
                    </div>

                    {/* ----------- Message -------------- */}
                    <div className="mb-4">
                        <label htmlFor="message" className="block cursor-pointer mb-1 text-lg font-light text-gray-950 dark:text-gray-300">
                            Message
                        </label>
                        <textarea
                            rows={4}
                            name="message"
                            value={formData.message}
                            onChange={handleChnage}
                            id="message"
                            placeholder="Tell us about your project..."
                            className='w-full pl-4 pr-3 py-2 bg-white bg-opacity-50 rounded-lg border border-gray-200 focus:border-white focus:ring-4 focus:ring-gray-100 text-gray-500 placeholder-gray-400 transition duration-200'
                        />
                    </div>
                    <button className="w-full p-3 border border-gray-300 rounded-xl text-white bg-gradient-to-r from-[#01151f] via-black to-[#01151f] hover:scale-105 duration-100 transition-all cursor-pointer" type="submit">
                        Send Message
                    </button>
                </form>

            </section>
        </header>
    )
}

export default GetInTouch
