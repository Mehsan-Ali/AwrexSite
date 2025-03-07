import { Sparkles } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const CallToAction = () => {
    return (
        <section className="bg-gradient-to-r from-slate-400 to-slate-950 overflow-hidden py-20 md:py-32">
            <div className="container relative px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-md">
                                <Sparkles className="mr-1 h-3.5 w-3.5" />
                                <span>Let's Build Something Amazing</span>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                                Ready to Build Your Dream Software?
                            </h2>
                            <p className="max-w-[600px] text-lg text-indigo-100 md:text-xl/relaxed">
                                Let's collaborate to create innovative solutions that drive your business forward. Our team is
                                ready to turn your vision into reality.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-4">
                        <div className="rounded-xl bg-white/10 p-8 backdrop-blur-md">
                            <div className="grid grid-cols-1">
                                <button className="w-full bg-white cursor-pointer text-gray-600 p-2 rounded-lg hover:bg-white/90">
                                    <NavLink to={`${'/contact-us'}`}>
                                        Contact Us
                                    </NavLink>
                                </button>
                            </div>
                            <div className="mt-8 flex items-center justify-center gap-4">
                                <div className="h-px flex-1 bg-white/20"></div>
                                <span className="text-sm text-white/70">or</span>
                                <div className="h-px flex-1 bg-white/20"></div>
                            </div>
                            <div className="mt-4">
                                <button className="w-full p-2 rounded-lg cursor-pointer text-white hover:bg-white/10">
                                    <NavLink to={`${'/schedule'}`}>
                                        Schedule a Consultation
                                    </NavLink>
                                </button>
                            </div>


                            {/* <div className="mt-8">
                                <div className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
                                        />
                                    </div>
                                    <button className="bg-white text-indigo-600 hover:bg-white/90">Subscribe</button>
                                </div>
                                <p className="mt-2 text-xs text-white/70">Stay updated with our latest news and offers.</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction
