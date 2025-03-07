import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChildLinks } from './NavLinks';
import { Menu, X, ChevronLeft } from 'lucide-react';

export function NavBar() {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState<number | null>(null);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // const currentScrollY = window.scrollY;
            const currentScrollY = window.scrollY > 60 ? window.scrollY : 90;
            if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        if (scrollDirection === 'down') {
            document.body.classList.add('scroll-down');
        } else {
            document.body.classList.remove('scroll-down');
        }
    }, [scrollDirection]);

    const handleMobileSubmenuClick = (index: number) => {
        setOpenMobileSubmenu(openMobileSubmenu === index ? null : index);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: scrollDirection === 'down' ? -100 : 0 }}
            transition={{ duration: 0.3 }}
            // className="z-50 w-full bg-gradient-to-l from-sky-950 via-gray-900 to-sky-900 backdrop-blur-lg"
            // className="z-50 w-full bg-gradient-to-r from-[#310913]  to-[#06252e] backdrop-blur-lg"
            // className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#000000] to-[#032730]"
            className="sticky top-0 z-50 w-full"   
        >
            <div className='absolute w-full bg-[#ffffff1e] backdrop-blur-sm h-18'>
            </div>
            <div className="container mx-auto flex justify-between items-center px-6 py-3 sm:py-0">
                <Link to="/" className="flex items-center space-x-2">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl font-bold text-gray-500 z-50"
                    >
                        Quinx
                    </motion.span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex">
                    <ul className="flex space-x-8">
                        {ChildLinks.map((link, index) => (
                            <li className="relative" key={index}>
                                <button
                                    onMouseEnter={() => setOpenDropdown(index)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                    className="py-6 px-4 text-sm font-semibold text-gray-500 hover:text-gray-500 transition-colors duration-200"
                                >
                                    <Link to={`${link.url}`}>
                                        {link.name}
                                    </Link>
                                </button>
                                {link.submenu && openDropdown === index && (
                                    <div>
                                        <div
                                            className="absolute -right-20 rounded-lg shadow-lg"
                                            onMouseEnter={() => setOpenDropdown(index)}
                                            onMouseLeave={() => setOpenDropdown(null)}
                                        >
                                            <div className="bg-[#ffffff] py-3 px-5 w-4xl grid grid-cols-4 gap-5">
                                                {link.sublinks?.map((sub, i) => (
                                                    <div key={i}>
                                                        <div className="border-b sm:border-b-1 border-[#e6e6e6] pt-5 mb-2 text-base sm:text-lg text-gray-950 font-semibold">
                                                            {sub.Head}
                                                        </div>
                                                        {sub.sublink.map((slink, subIndex) => (
                                                            <li key={subIndex} className="text-sm my-2.5 text-gray-600 hover:text-[#d4d4d4] hover:transition hover:ease-linear hover:duration-300 hover:translate-x-3 duration-300">
                                                                <Link to={slink.link}>
                                                                    <span className='text-[11px] relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-900 after:transition-all after:duration-300 hover:after:w-full font-normal uppercase'>
                                                                        {slink.name}
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden"
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-14 left-0 w-full bg-white shadow-lg max-h-[80vh] overflow-y-auto"
                >
                    <ul className="flex flex-col p-4 space-y-2">
                        {ChildLinks.map((link, index) => (
                            <li key={index}>
                                {link.submenu ? (
                                    <button
                                        onClick={() => handleMobileSubmenuClick(index)}
                                        className="w-full flex justify-between items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                    >
                                        <span>{link.name}</span>
                                        <ChevronLeft size={16} className="transform rotate-180" />
                                    </button>
                                ) : (
                                    <Link
                                        to={link.name || "#"}
                                        className="block p-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}

                                {openMobileSubmenu === index && link.submenu && (
                                    <ul className="pl-4 mt-2 space-y-2">
                                        {link.sublinks?.map((sub, i) => (
                                            <div key={i}>
                                                <h1 className="border-b sm:border-b-1 border-[#e6e6e6] pt-5 mb-2 text-base sm:text-lg text-gray-600">
                                                    {sub.Head}
                                                </h1>
                                                {sub.sublink.map((slink, subIndex) => (
                                                    <li key={subIndex} className="text-sm my-2.5 text-gray-500 hover:text-[#d4d4d4] hover:transition hover:ease-linear hover:duration-300 hover:translate-x-3 duration-300">
                                                        <Link
                                                            to={slink.link}
                                                            className="block p-2 hover:bg-gray-100 rounded-md"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {slink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.header>
    );
}