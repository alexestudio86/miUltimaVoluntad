import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function Feature ( { bodyFeature } ){
    return(
        <div className='w3-half w3-padding'>
            <div className='w3-white w3-card'>
                <div className='w3-cell-row w3-padding'>
                    <div className='w3-cell w3-cell-middle'>
                        <FontAwesomeIcon className='w3-xxlarge p-2' icon={ bodyFeature.icono } />
                    </div>
                    <p className='w3-cell w3-cell-middle'>{ bodyFeature.texto }</p>
                </div>
                <div className='w3-cell-row w3-cell-middle w3-light-gray'>
                    <h1 className='w3-large w3-center w3-padding'>{ bodyFeature.titulo }</h1>
                </div>
            </div>
        </div>
    )
}