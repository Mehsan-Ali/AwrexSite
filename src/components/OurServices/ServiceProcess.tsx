import { CheckCircle, Code, Zap, Layers, Rocket } from "lucide-react"
// #6b7280
export default function ProcessSection() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-slate-50 -z-10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_40%)] -z-10"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_40%)] -z-10"></div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#1b1b1b]/5 blur-3xl -z-10"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-[#1b1b1b]/5 blur-3xl -z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#c5c5c5a4] rounded-full -z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#c5c5c588] rounded-full -z-10"></div>

            <div className="container mx-auto relative z-10">
                <div className="mx-auto max-w-3xl text-center mb-20 px-3">
                    <div className="inline-flex items-center justify-center p-1 px-3 mb-6 border border-[#1b1b1b]/20 rounded-full bg-[#1b1b1b]/5 text-[#1b1b1b] text-sm font-medium">
                        Our Process
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1b1b1b] to-[#01151f] pb-2">
                        How We Deliver Excellence
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our proven development methodology ensures quality, efficiency, and transparency throughout your project.
                    </p>
                </div>

                <div className="relative px-5 sm:px-0">
                    {/* Central line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1b1b1b]/40 via-[#1b1b1b]/20 to-[#1b1b1b]/40 hidden lg:block"></div>

                    <div className="space-y-24 lg:space-y-0">
                        {/* Step 1 */}
                        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="lg:text-right mb-10 lg:mb-0 lg:pr-16">
                                <div className="flex items-center justify-end mb-4">
                                    <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mr-3">
                                        Step 01
                                    </span>
                                    <div className="h-px w-12 bg-[#1b1b1b]/30"></div>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 flex items-center justify-end gap-3">
                                    <span>Discovery & Planning</span>
                                    <div className="w-12 h-12 rounded-xl bg-[#1b1b1b]/10 flex items-center justify-center text-[#1b1b1b]">
                                        <Layers className="h-6 w-6" />
                                    </div>
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    We work closely with you to understand your business goals, requirements, and challenges to create a
                                    detailed project roadmap.
                                </p>
                            </div>

                            <div className="relative">
                                {/* Circle connector for desktop */}
                                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-white bg-[#1b1b1b] hidden lg:block"></div>

                                <div className="border-none bg-gradient-to-br from-white to-slate-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] rounded-2xl p-6 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] transition-all duration-500">
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-[#1b1b1b]/10 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="h-4 w-4 text-[#1b1b1b]" />
                                            </div>
                                            <span>Requirements gathering</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-[#1b1b1b]/10 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="h-4 w-4 text-[#1b1b1b]" />
                                            </div>
                                            <span>Project scoping</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-[#1b1b1b]/10 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="h-4 w-4 text-[#1b1b1b]" />
                                            </div>
                                            <span>Timeline & budget planning</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="order-last lg:text-left mb-10 lg:mb-0 lg:pl-16">
                                <div className="flex items-center mb-4">
                                    <div className="h-px w-12 bg-[#1b1b1b]/30"></div>
                                    <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase ml-3">
                                        Step 02
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-[#1b1b1b]/10 flex items-center justify-center text-[#1b1b1b]">
                                        <Code className="h-6 w-6" />
                                    </div>
                                    <span>Design & Architecture</span>
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    Our team designs the system architecture and user interfaces to ensure optimal performance and
                                    usability.
                                </p>
                            </div>

                            <div className="relative order-first lg:order-none">
                                {/* Circle connector for desktop */}
                                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-white bg-[#1b1b1b] hidden lg:block"></div>

                                <div className="border-none bg-gradient-to-br from-white to-slate-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] rounded-2xl p-6 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] transition-all duration-500">
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-[#1b1b1b]/10 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="h-4 w-4 text-[#1b1b1b]" />
                                            </div>
                                            <span>UI/UX design</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-[#1b1b1b]/10 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="h-4 w-4 text-[#1b1b1b]" />
                                            </div>
                                            <span>System architecture</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-[#1b1b1b]/10 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="h-4 w-4 text-[#1b1b1b]" />
                                            </div>
                                            <span>Technology selection</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="lg:text-right mb-10 lg:mb-0 lg:pr-16">
                                <div className="flex items-center justify-end mb-4">
                                    <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mr-3">
                                        Step 03
                                    </span>
                                    <div className="h-px w-12 bg-[#1b1b1b]/30"></div>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 flex items-center justify-end gap-3">
                                    <span>Development & Testing</span>
                                    <div className="w-12 h-12 rounded-xl bg-[#1b1b1b]/10 flex items-center justify-center text-[#1b1b1b]">
                                        <Zap className="h-6 w-6" />
                                    </div>
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    We develop your software using agile methodologies and conduct thorough testing to ensure quality.
                                </p>
                            </div>

                            <div className="relative">
                                {/* Circle connector for desktop */}
                                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-white bg-[#1b1b1b] hidden lg:block"></div>

                                <div className="border-none bg-gradient-to-br from-white to-slate-100  shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] rounded-2xl p-6 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] transition-all duration-500">
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-[#1b1b1b]/10 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="h-4 w-4 text-[#1b1b1b]" />
                                            </div>
                                            <span>Agile development</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-[#1b1b1b]/10 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="h-4 w-4 text-[#1b1b1b]" />
                                            </div>
                                            <span>Quality assurance</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-[#1b1b1b]/10 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="h-4 w-4 text-[#1b1b1b]" />
                                            </div>
                                            <span>Regular progress updates</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="order-last lg:text-left mb-10 lg:mb-0 lg:pl-16">
                                <div className="flex items-center mb-4">
                                    <div className="h-px w-12 bg-[#1b1b1b]/30"></div>
                                    <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase ml-3">
                                        Step 04
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-[#1b1b1b]/10 flex items-center justify-center text-[#1b1b1b]">
                                        <Rocket className="h-6 w-6" />
                                    </div>
                                    <span>Deployment & Support</span>
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    We deploy your software and provide ongoing support and maintenance to ensure its continued success.
                                </p>
                            </div>

                            <div className="relative order-first lg:order-none">
                                {/* Circle connector for desktop */}
                                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-white bg-[#1b1b1b] hidden lg:block"></div>

                                <div className="border-none bg-gradient-to-br from-white to-slate-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] rounded-2xl p-6 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] transition-all duration-500">
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-[#1b1b1b]/10 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="h-4 w-4 text-[#1b1b1b]" />
                                            </div>
                                            <span>Smooth deployment</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-[#1b1b1b]/10 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="h-4 w-4 text-[#1b1b1b]" />
                                            </div>
                                            <span>User training</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-[#1b1b1b]/10 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="h-4 w-4 text-[#1b1b1b]" />
                                            </div>
                                            <span>Ongoing maintenance</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

