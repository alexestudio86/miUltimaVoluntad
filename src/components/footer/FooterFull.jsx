import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';


export function FooterFull ( ){
    return(
        <div className='w3-col m12'>
            <div className='container py-2'>
                <div className='w3-row'>
                    <div className='w3-col m4'>
                        <h1 className='w3-xlarge'>Enlaces</h1>
                        <ul className='w3-medium p-2'>
                            <li>
                                <Link to='..'>Términos y condiciones</Link>
                            </li>
                            <li>
                                <Link href='..'>Aviso de privacidad</Link>
                            </li>
                        </ul>
                    </div>
                        <div className='w3-col m4'>
                            <h1 className='w3-xlarge'>Contacto</h1>
                            <address>Felix Parra 192, San José Insurgentes, Benito Juárez, 03900, CDMX</address>
                        </div>
                        <div className='w3-col m4'>
                            <h1 className='w3-xlarge'>Sucursales</h1>
                            <ul>
                                <li>México: Jalisco, Michoacán, Zacatecas. Guanajuato</li>
                                <li>USA: California, Texas, New Jersey, New York, Arizona e Illinois.</li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    )
}