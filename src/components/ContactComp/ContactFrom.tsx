import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react'

const ContactFrom = () => {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

    const handleChnage = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    console.log(formData)

    return (
        // <div className='bg-gray-900/50 '>
        <div className="container px-4 md:px-6 py-12 md:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-10 sm:px-10">

                {/* <section className="my-8 max-w-3xl mx-auto"> */}
                <section className="my-8 rounded-xl bg-white p-6 shadow-lg md:p-8">
                    <h5 className='text-2xl font-semibold pb-5'>Send us a message</h5>
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

                <section className="space-y-8 sm:pt-10" >
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Our team is here to help. Reach out through any of these channels and we'll respond as soon as
                            possible.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {
                            ContactInformation.map((data, index) => (
                                <div className="flex items-center shadow-lg gap-4 border-b border-gray-200 space-y-8 py-5 bg-gray-100 px-5 rounded-lg" key={index}>
                                    <div className="rounded-full bg-slate-300/50 my-auto text-gray-900 p-3">
                                        <data.icon className="size-10" strokeWidth={1.1}/>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">{data.title}</h3>
                                        <p className="mt-1 text-gray-600 ">
                                            {data.description}
                                            <br />
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {data.para}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </section>
            </div>
        </div>
    )
}

export default ContactFrom


const ContactInformation = [
    {
        id: 1,
        title: 'Our Office',
        icon: MapPin,
        description: "123 Innovation Drive, Suite 400"
    },
    {
        id: 2,
        title: 'Phone',
        icon: Phone,
        description: "+1 (555) 123-4567"
    },
    {
        id: 3,
        title: 'Email',
        icon: Mail,
        description: "info@example.com",
        para: "For general inquiries"
    }
]
