import React from 'react';
import OurClient from './HomeComp/OurClients';
import ClientOne from '../assets/Clients/client1.png'
import ClientTwo from '../assets/Clients/client2.png'
import ClientThree from '../assets/Clients/client3.png'
import ClientFour from '../assets/Clients/client4.png'
import ClientFive from '../assets/Clients/client5.png'
import ClientSix from '../assets/Clients/client6.png'
import ClientSeven from '../assets/Clients/client7.png'
import ClientEight from '../assets/Clients/client8.png'
const MarqueeClients: React.FC = () => {
    const logos = [
        ClientOne,
        ClientTwo,
        ClientThree,
        ClientFour,
        ClientFive,
        ClientSix,
        ClientSeven,
        ClientEight
    ];

    return (
        <div className="py-10">
            <div className="flex text-center items-center flex-col">
                <h2 className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-100">Our Clients</h2>
                <h3 className="text-lg text-slate-500 leading-relaxed max-w-2xl mt-4">
                    We've helped businesses of all sizes across various industries achieve their goals through custom software solutions.
                </h3>
            </div>
            <OurClient logos={logos} speed={10} logoHeight={120} spacing={50} />
        </div>
    );
};

export default MarqueeClients;