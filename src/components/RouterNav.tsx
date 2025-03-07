import { Route, Routes } from 'react-router-dom'
import { NavBar } from './Navbar/Navbar'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import SchedulePage from '../pages/SchedulePage'

const RouterNav = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="/contact-us" element={<ContactPage />} />
                <Route path="/schedule" element={<SchedulePage />} />
            </Routes>
        </>
    )
}

export default RouterNav
