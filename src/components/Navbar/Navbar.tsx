import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChildLinks } from './NavLinks';
import { Menu, X, ChevronLeft } from 'lucide-react';
import AwrexLogo from "../../assets/Awrex Bg.png"

export function NavBar() {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState<number | null>(null);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
    const [lastScrollY, setLastScrollY] = useState(0);

    // Throttle scroll event to improve performance
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY > 60 ? window.scrollY : 90;
            if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            setLastScrollY(currentScrollY);
        }; // Adjust throttle delay as needed

        window.addEventListener('scroll', handleScroll);
        return () => {
            // handleScroll.cancel(); // Cancel throttled function on cleanup
            window.removeEventListener('scroll', handleScroll);
        };
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
            className="sticky top-0 z-50 md:py-0 py-2 w-full bg-[#ffffff2f] backdrop-blur-sm"
        >
            <div className="container mx-auto flex justify-between items-center px-6 py-3 sm:py-0">
                <Link to="/" className="flex items-center space-x-2">
                    <img src={AwrexLogo} alt="Awrex Solutions" title='Awrex' className='size-12 sm:size-18' />
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl font-bold text-gray-500 z-50"
                    >
                        Awrex
                    </motion.span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex">
                    <div className="flex space-x-8">
                        {ChildLinks.map((link, index) => (
                            <span className="relative" key={index}>
                                <button
                                    onMouseEnter={() => setOpenDropdown(index)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                    className="py-6 px-4 text-sm font-semibold text-gray-500 hover:text-gray-500 transition-colors duration-200"
                                    aria-expanded={openDropdown === index}
                                    aria-controls={`dropdown-${index}`}
                                >
                                    <Link to={link.url || '#'}>{link.name}</Link>
                                </button>
                                {link.submenu && openDropdown === index && (
                                    <div
                                        id={`dropdown-${index}`}
                                        className="absolute -left-130 rounded-lg shadow-lg"
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
                                                        <li key={subIndex} className="text-sm my-2.5 text-gray-600 hover:text-[#d4d4d4] hover:transition hover:ease-linear hover:duration-300 hover:translate-x-3 duration-300 list-none">
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
                                )}
                            </span>
                        ))}
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden"
                    aria-label="Toggle mobile menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-12 left-0 w-full bg-white shadow-lg max-h-[80vh] overflow-y-auto"
                >
                    <ul className="flex flex-col p-4 space-y-2">
                        {ChildLinks.map((link, index) => (
                            <div key={index}>
                                {link.submenu ? (
                                    <button
                                        onClick={() => handleMobileSubmenuClick(index)}
                                        className="w-full flex justify-between items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                        aria-expanded={openMobileSubmenu === index}
                                        aria-controls={`mobile-submenu-${index}`}
                                    >
                                        <span>{link.name}</span>
                                        <ChevronLeft
                                            size={16}
                                            className={`transform ${openMobileSubmenu === index ? 'rotate-90' : '-rotate-90'}`}
                                        />
                                    </button>
                                ) : (
                                    <Link
                                        to={link.url || '#'}
                                        className="block p-2 text-gray-700 hover:bg-gray-100 rounded-md"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}

                                {openMobileSubmenu === index && link.submenu && (
                                    <ul id={`mobile-submenu-${index}`} className="pl-4 mt-2 space-y-2">
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
                            </div>
                        ))}
                    </ul>
                </motion.div>
            )}
            
        </motion.header>
    );
}