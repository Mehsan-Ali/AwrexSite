import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
    name: string;
    role: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Robert Gill",
        role: "Vice President",
        // image: "/placeholder.svg?height=100&width=100",
        quote:
            "A competitively price and professional service.",
    },
    {
        name: "Dennis King",
        role: "CEO",
        // image: "/placeholder.svg?height=100&width=100",
        quote: "Working with Awrex was a game-changer for our buisness. Their expertise im mobile application development helped us reach new heights in user engagement and revenue.",
    },
    {
        name: "Juli Smith",
        role: "Manager",
        // image: "/placeholder.svg?height=100&width=100",
        quote: "We would highly recommend Awrex to anyone looking for a reliable and professional software development partner.",
    },
];

const TestimonialsCarousel: React.FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <div className="mx-auto px-4 md:px-6 pt-12 md:pt-24 lg:pt-32 sm:pb-10">
            <div className="text-center">
                <h2 className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-100">Testimonials That Speak Volumes</h2>
                <p className="text-lg text-slate-500 leading-relaxed mt-4">
                    Hear what our clients have to say about their experience working with us.
                </p>
            </div>
            <section className="w-full max-w-5xl mx-auto px-4 py-5 sm:py-12 relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex-none w-full">
                                <div className="p-6 text-center space-y-4 bg-white">
                                    <Quote className="h-8 w-8 text-gray-400 mx-auto" />
                                    <p className="text-base sm:text-lg text-gray-600">{testimonial.quote}</p>
                                    {/* <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="h-16 w-16 rounded-full mx-auto"
                                    /> */}
                                    <h3 className="font-semibold text-sm sm:text-lg">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="absolute left-0 cursor-pointer top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
                    onClick={() => emblaApi?.scrollPrev()}
                >
                    <ChevronLeft className="h-6 w-6 text-gray-700" />
                </button>
                <button
                    className="absolute right-0 top-1/2 cursor-pointer transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
                    onClick={() => emblaApi?.scrollNext()}
                >
                    <ChevronRight className="h-6 w-6 text-gray-700" />
                </button>
                <div className="flex justify-center gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 rounded-full transition-colors ${index === current ? "bg-blue-500" : "bg-gray-300"}`}
                            aria-label={`Go to slide ${index + 1}`}
                            onClick={() => emblaApi?.scrollTo(index)}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TestimonialsCarousel;