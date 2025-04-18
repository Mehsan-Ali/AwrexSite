import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './Navbar/Navbar'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import SchedulePage from '../pages/SchedulePage'
import ServicesPages from './OurServices/ServicesPages'
import SolutionsPages from './OurSolutions/SolutionsPages'
import EmergingPages from './EmergingTech/EmergingPage'
import ConsulationPage from './Consulation/ConsulationPage'

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
                <Route path="/consulation/:consulation" element={<ConsulationPage />} />

                <Route path='*' element={<Navigate to="/" replace />} />    
            </Routes>
        </>
    )
}

export default RouterNav
