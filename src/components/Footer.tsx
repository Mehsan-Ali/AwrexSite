import { MoveRight, Facebook, Instagram, Linkedin, Mail, MapPinned, PhoneCall, Twitter, X, Youtube, YoutubeIcon, LucideYoutube } from 'lucide-react';
import Logo from "../assets/Awrex2.jpg"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        // <div className='bg-gradient-to-tr from-sky-950 via-black to-sky-950'>
        <div className='bg-gradient-to-r from-[#01151f] via-black to-[#01151f]'>
            <div className='py-16 '>
                <div className='flex sm:justify-around overflow-hidden justify-start flex-wrap mx-5 sm:mx-10 gap-y-10 gap-x-16'>

                    <div className='text-gray-50 max-w-[25rem] flex-grow'>
                        <div className='flex items-center gap-3 py-5'>
                            <img
                                alt="Awrex Solutions"
                                src={Logo}
                                className="h-14 w-auto rounded-2xl"
                            />
                            <h2 className='font-semibold text-xl'>
                                Awrex
                            </h2>
                        </div>
                        <p className='font-thin tracking-wider text-sm'>
                            Transforming data into actionable insights for businesses worldwide.
                        </p>

                        {/* ------------Socail Media------------ */}

                        <div className='my-8 flex justify-between max-w-56' >
                            {
                                socialLogos.map((item, index) => (
                                    <a href={item.path} key={index} target='blank' className={`text-[rgb(255,255,255)]  hover:transition p-2 rounded-full hover:bg-[#144b20] hover:text-white hover:scale-110 hover:ease-in hover:duration-300 hover:delay-150`}>
                                        {item.icon}
                                    </a>
                                ))
                            }
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 text-gray-100 flex-grow'>
                        <h1 className='font-bold text-xl py-4 uppercase'>Links</h1>
                        <ul className='flex flex-col gap-5'>
                            {
                                usefulLinks.map((item, index) => (
                                    <a href={item.path} key={index} className='py-1'>
                                        <li className='hover:text-[#d4d4d4] hover:transition hover:ease-linear hover:duration-300 hover:translate-x-3 duration-300'>
                                            {/* {item.icon} */}
                                            <span className='relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#ffffff] after:transition-all after:duration-300 hover:after:w-full '>
                                                {item.title}
                                            </span>
                                        </li>
                                    </a>
                                ))
                            }
                        </ul>
                    </div>

                    {/* ------------------  Get In Touch ------------------ */}

                    <div className='flex flex-col gap-3 text-gray-100 flex-grow'>
                        <h1 className='font-bold text-xl py-4 uppercase'>Get in Touch</h1>
                        <ul className='flex flex-col gap-5'>
                            {
                                Feelfree.map((item, index) => (
                                    <div key={index} className='flex gap-3 py-3'>
                                        {item.icon}
                                        <li>{item.title}</li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className='text-white font-semibold text-center py-5 sm:py-5'>
                <a href={'https://sphere.com.pk'}>
                    Copyright © {currentYear} Awrex. All Right Reserved
                </a>
            </div>
        </div>
    )
}

export default Footer

const socialLogos = [
    {
        id: 1,
        icon: <Facebook />,
        path: 'https://www.facebook.com/alikhwan.farms',
        color: "bg-blue-800"
    },


    {
        id: 2,
        icon: <X />,
        path: 'https://x.com/ikhwan_ltd',
        color: "bg-blue-800"
    },
    {

        id: 3,
        icon: <Youtube />,
        path: 'https://youtube.com/@alikhwanfarms7574',
        color: 'bg-pink-500'
    },
    {
        id: 4,
        icon: <Linkedin />,
        path: 'https://www.linkedin.com/company/al-ikhwan-farms/',
        color: 'bg-blue-800',
    },
]

const usefulLinks = [
    {
        id: 1,
        title: "About Us",
        icon: <MoveRight />,
        path: '/about'
    },
    {
        id: 2,
        title: "Contact Us",
        icon: <MoveRight />,
        path: '/contact'
    },
    // {
    //     id: 3,
    //     title: "Services",
    //     icon: <MoveRight />,
    //     path: '/services'
    // },
    {
        id: 4,
        title: "Projects SOIFS",
        icon: <MoveRight />,
        path: '/project'
    },
    {
        id: 5,
        title: "FAQs",
        icon: <MoveRight />,
        path: '/faqs'
    },
]

const Feelfree = [
    {
        id: 1,
        title: "Location",
        icon: <MapPinned />,
    },
    {
        id: 2,
        title: "info@awrex.co.uk",
        icon: <Mail />,
    },
    {
        id: 1,
        title: "+92-3 111 243 111",
        icon: <PhoneCall />,
    },
]