import { Feature } from '../components/features/Feature';
import { features } from '../components/features/features';


export function Features ( ){
    return(
        <div className='container py-4'>
            <div className='w3-row'>
                { features.map( (feature, index) => <Feature key={index} bodyFeature={feature} /> ) }
            </div>
        </div>
    )
}