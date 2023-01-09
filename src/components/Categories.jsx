import Benefits from '../assets/benefits.jpg';
import Information from '../assets/information.jpg';
import Travel from '../assets/travel.jpg'

export function Categories () {
    return (
        <div className='container py-4'>
            <div className='w3-row'>
                <div className='w3-third w3-hover-opacity'>
                    <img className='w-100 w3-padding' height='300px' width='auto' alt='Beneficios' src={Benefits} style={ {objectFit: 'cover'} } />
                </div>
                <div className='w3-third w3-hover-opacity'>
                    <img className='w-100 w3-padding' height='300px' width='auto' alt='Beneficios' src={Information} style={ {objectFit: 'cover'} } />
                </div>
                <div className='w3-third w3-hover-opacity'>
                    <img className='w-100 w3-padding' height='300px' width='auto' alt='Beneficios' src={Travel} style={ {objectFit: 'cover'} } />
                </div>
            </div>
        </div>
    )
}