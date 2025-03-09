
export default function BenefitsSection({ service }: { service: any }) {

    return (
        <section className="py-20 bg-background">
            <div className="px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-gray-950 to-blue-100 text-3xl font-bold tracking-tight sm:text-4xl">
                        Why Choose Our {service.title} Service?
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-900 max-w-3xl mx-auto">
                        {service.whyChooseSubHeading}
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8">
                        {service.whyChoose.map((benefit: any, index: number) => (
                            <div key={index} className="flex gap-4 items-start border-b border-r border-gray-300 shadow-sm p-3 sm:p-5 rounded-lg bg-white">
                                <div className="rounded-full bg-gray-950/10 p-3">{benefit.icon}</div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center justify-center p-1 rounded-full bg-muted mb-4">
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary text-primary-foreground">
                            98% Client Satisfaction
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight mb-4">Ready to transform your online presence?</h3>
                    <button className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none cursor-pointer hover:scale-105 transition-all focus-visible:ring-1 focus-visible:ring-ring">
                        Get Started Today
                    </button>
                </div>
            </div>
        </section>
    )
}

