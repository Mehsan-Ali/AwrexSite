import { Route, Routes } from 'react-router-dom'
import { NavBar } from './Navbar/Navbar'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import SchedulePage from '../pages/SchedulePage'
import ServicesPages from './OurServices/ServicesPages'
import SolutionsPages from './OurSolutions/SolutionsPages'
import EmergingPages from './EmergingTech/EmergingPage'

const RouterNav = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="/contact-us" element={<ContactPage />} />
                <Route path="/schedule" element={<SchedulePage />} />

                <Route path="/services/:service" element={<ServicesPages />} />
                <Route path="/solutions/:solution" element={<SolutionsPages />} />
                <Route path="/emerging-tech/:emerging" element={<EmergingPages />} />

                <Route path="*" element={<HomePage/>} />    
            </Routes>
        </>
    )
}

export default RouterNav
