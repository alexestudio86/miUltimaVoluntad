import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';


export function Footer ( ){
    return(
        <footer className='w3-row w3-white'>
            <div className='w3-col m12'>
                <div className='container py-2'>
                    <div className='w3-row'>
                        <div className='w3-half'>
                            <h1 className='w3-xlarge'>Enlaces</h1>
                            <ul className='w3-medium p-2'>
                                <li>
                                    <a href='#'>Términos y condiciones</a>
                                </li>
                                    <li>
                                        <a href='#'>Aviso de privacidad</a>
                                    </li>
                                </ul>
                        </div>
                        <div className='w3-rest'>
                            <h1 className='w3-xlarge'>Contacto</h1>
                            <address>Felix Parra 192, San José Insurgentes, Benito Juárez, 03900, CDMX</address>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w3-col m12 w3-light-gray'>
                <div className='container w3-center'>
                    <a href='#' className='w3-button'>
                        <FontAwesomeIcon className='w3-xlarge' icon={faFacebook} />
                    </a>
                    <a href='' className='w3-button'>
                        <FontAwesomeIcon className='w3-xlarge' icon={faInstagram} />
                    </a>
                    <a href='' className='w3-button'>
                        <FontAwesomeIcon className='w3-xlarge' icon={faTiktok} />
                    </a>
                </div>
            </div>
        </footer>
    )
}