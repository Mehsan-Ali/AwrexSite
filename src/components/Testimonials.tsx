import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
    name: string;
    role: string;
    image: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Sarah Johnson",
        role: "Product Manager",
        image: "/placeholder.svg?height=100&width=100",
        quote:
            "This product has completely transformed how we work. The efficiency gains are remarkable, and the user interface is intuitive.",
    },
    {
        name: "Michael Chen",
        role: "Software Engineer",
        image: "/placeholder.svg?height=100&width=100",
        quote: "The technical capabilities are impressive. It's been a game-changer for our development workflow.",
    },
    {
        name: "Emma Davis",
        role: "Marketing Director",
        image: "/placeholder.svg?height=100&width=100",
        quote: "The analytics features have provided invaluable insights for our marketing campaigns. Highly recommended!",
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
        <div className="container mx-auto px-4 md:px-6 pt-12 md:pt-24 lg:pt-32 pb-12  dark:bg-gray-900">
            <div className="text-center">
                <h2 className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-100">Testimonials That Speak Volumes</h2>
                <p className="text-lg text-slate-500 leading-relaxed mt-4">
                    Hear what our clients have to say about their experience working with us.
                </p>
            </div>
            <section className="w-full max-w-4xl mx-auto px-4 py-12 relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex-none w-full px-4">
                                <div className="p-6 text-center space-y-4 bg-white">
                                    <Quote className="h-8 w-8 text-gray-400 mx-auto" />
                                    <p className="text-lg text-gray-600">{testimonial.quote}</p>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="h-16 w-16 rounded-full mx-auto"
                                    />
                                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
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
                <div className="flex justify-center gap-2 mt-4">
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