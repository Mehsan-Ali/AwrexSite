import ScheduleHero from '../components/ScheduleComp/ScheduleHero'
import ScheduleForm from '../components/ScheduleComp/ScheduleForm'
import SEOAdjust from '../components/SEOAdjust'

const SchedulePage = () => {
    return (
        <>
            <SEOAdjust title='About Us' description='About Us Page' />
            <ScheduleHero />
            <ScheduleForm />
        </>
    )
}

export default SchedulePage
