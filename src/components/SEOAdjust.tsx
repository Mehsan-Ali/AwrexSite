import { Helmet } from '@dr.pogodin/react-helmet';
interface SEOAdjustProps {
    title: string;
    description: string;
}
const SEOAdjust = (props: SEOAdjustProps) => {
    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name='description' content={props.description} />
        </Helmet>
    )
}

export default SEOAdjust

// const SEOAdjust = ({ props }: { props: { title: string, description: string } }) => {