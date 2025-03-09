"use client"
import { useState } from "react"

export default function FeaturesSection({ solution }: { solution: any }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section className="w-full py-16 bg-gradient-to-b from-background via-background/90 to-background relative overflow-hidden">

            <div className="px-4 md:px-6 relative z-10">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">What We Offer</div>
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Key <span className="text-primary">Features</span>
                    </h2>
                    <p className="max-w-[85%] text-muted-foreground text-lg">
                        {solution.keyFeatIntro}
                    </p>
                </div>

                <div className="mx-auto grid max-w-6xl gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3">
                    {solution.keyFeatures.map((feature: any, index: number) => (
                        <div
                            key={index}
                            className="group perspective-1000"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div
                                className={`relative h-full transition-all duration-500 ${hoveredIndex === index ? "[transform:rotateY(10deg)]" : ""
                                    } preserve-3d`}
                            >
                                <div className="h-full border-0 bg-card/50 backdrop-blur-sm shadow-xl">
                                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm"></div>

                                    <div className="p-6 flex flex-col h-full">
                                        <div className={`mb-6 rounded-xl p-4 w-fit ${feature.gradient}`}>{feature.icon}</div>

                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {feature.title}
                                        </h3>

                                        <p className="text-muted-foreground flex-grow">{feature.description}</p>
                                    </div>
                                </div>

                                {/* Shadow element for 3D effect */}
                                <div
                                    className={`absolute inset-0 rounded-lg bg-black/5 -z-10 transition-all duration-500 ${hoveredIndex === index
                                            ? "translate-x-2 translate-y-2 blur-md"
                                            : "translate-x-1 translate-y-1 blur-sm"
                                        }`}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

