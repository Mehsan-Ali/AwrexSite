import React from 'react';

// Define the props for the Marquee component
interface MarqueeProps {
    logos: string[]; // Array of logo image URLs
    speed?: number; // Speed of the marquee animation (in seconds)
    logoHeight?: number; // Height of the logos
    spacing?: number; // Spacing between logos
}

const OurClient: React.FC<MarqueeProps> = ({ logos, speed = 20, logoHeight = 50, spacing = 40 }) => {
    // Duplicate the logos to create a seamless loop
    const duplicatedLogos = [...logos, ...logos];

    return (
        <div className="w-full overflow-hidden py-5">
            <style>
                {`
                @keyframes marquee-scroll {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                `}
            </style>
            <div
                className="inline-flex whitespace-nowrap"
                style={{
                    animation: `marquee-scroll ${speed}s linear infinite`,
                    willChange: 'transform',
                }}
            >
                {/* Render the duplicated logos */}
                <div className="inline-flex items-center">
                    {duplicatedLogos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Client Logo ${index + 1}`}
                            style={{ height: `${logoHeight}px`, marginRight: `${spacing}px` }}
                            className="object-cover"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurClient;