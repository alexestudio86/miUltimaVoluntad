import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPhone } from '@fortawesome/free-solid-svg-icons';

export function Features ( ){
    return(
        <main className='container py-4'>
            <div className='w3-row'>
                <article className='w3-half w3-padding'>
                    <div className='w3-white w3-card'>
                        <div className='w3-cell-row w3-padding'>
                            <div className='w3-cell w3-cell-middle'>
                                <FontAwesomeIcon className='w3-xxlarge p-2' icon={faStar} />
                            </div>
                            <p className='w3-cell w3-cell-middle'>Contamos con asistencia inmediata las 24h del día</p>
                        </div>
                        <header className='w3-cell-row w3-cell-middle w3-light-gray'>
                            <h1 className='w3-large w3-center w3-padding'>Asistencia 24h</h1>
                        </header>
                    </div>
                </article>
                <article className='w3-half w3-padding'>
                    <div className='w3-white w3-card'>
                        <div className='w3-cell-row w3-padding'>
                            <div className='w3-cell w3-cell-middle'>
                                <FontAwesomeIcon className='w3-xxlarge p-2' icon={faPhone} />
                            </div>
                            <p className='w3-cell w3-cell-middle'>Recibirá asesoría total en caso de un siniestro</p>
                        </div>
                        <header className='w3-cell-row w3-cell-middle w3-light-gray'>
                            <h1 className='w3-large w3-center w3-padding'>Apoyo en emergencias</h1>
                        </header>
                    </div>
                </article>
            </div>
        </main>
    )
}