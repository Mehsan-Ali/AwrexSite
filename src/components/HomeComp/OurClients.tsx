import React from 'react';

// Define the props for the Marquee component
interface MarqueeProps {
    logos: string[]; // Array of logo image URLs
    speed?: number; // Speed of the marquee animation (in seconds)
    logoHeight?: number; // Base height of the logos
    spacing?: number; // Base spacing between logos
}

const OurClient: React.FC<MarqueeProps> = ({ logos, speed = 20, logoHeight = 50, spacing = 40 }) => {
    // Duplicate the logos to create a seamless loop
    const duplicatedLogos = [...logos, ...logos];

    return (
        <div className="w-full overflow-hidden py-5 relative">
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

                .marquee-container {
                    display: inline-flex;
                    white-space: nowrap;
                    animation: marquee-scroll ${speed}s linear infinite;
                    will-change: transform;
                }

                .marquee-container img {
                    height: ${logoHeight}px;
                    margin-right: ${spacing}px;
                    object-fit: contain;
                }

                /* Responsive adjustments */
                @media (max-width: 1024px) {
                    .marquee-container img {
                        height: ${logoHeight * 0.9}px;
                        margin-right: ${spacing * 0.9}px;
                    }
                }

                @media (max-width: 768px) {
                    .marquee-container img {
                        height: ${logoHeight * 0.8}px;
                        margin-right: ${spacing * 0.8}px;
                    }
                }

                @media (max-width: 480px) {
                    .marquee-container img {
                        height: ${logoHeight * 0.8}px;
                        margin-right: ${spacing * 0.2}px;
                    }
                }
                `}
            </style>
            <div className="marquee-container w-5xl">
                {/* Render the duplicated logos */}
                {duplicatedLogos.map((logo, index) => (
                    <img
                        key={`logo-${index}`} // Unique key for each logo
                        src={logo}
                        alt={`Client Logo ${index % logos.length + 1}`} // Use modulo to avoid duplicate alt text
                        className="object-contain"
                    />
                ))}
            </div>
        </div>
    );
};

export default OurClient;