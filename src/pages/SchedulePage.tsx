import ScheduleHero from '../components/ScheduleComp/ScheduleHero'
import ScheduleForm from '../components/ScheduleComp/ScheduleForm'
import SEOAdjust from '../components/SEOAdjust'

const SchedulePage = () => {
    return (
        <>
            <SEOAdjust
                title="Schedule a Consultation | Custom Software Development | AWREX"
                description="Schedule a consultation with AWREX to discuss your custom software development, web and app development, or DevOps needs. Let's create scalable solutions for your business."
            />

            <ScheduleHero />
            <ScheduleForm />
        </>
    )
}

export default SchedulePage
