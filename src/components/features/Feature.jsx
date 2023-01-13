import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function Feature ( { bodyFeature } ){
    return(
        <div className='w3-third w3-padding'>
            <div className='w3-center w3-padding'>
                <FontAwesomeIcon className='w3-jumbo p-2' icon={ bodyFeature.icono } />
                <p className='w3-large'>{ bodyFeature.texto }</p>
            </div>
        </div>
    )
}