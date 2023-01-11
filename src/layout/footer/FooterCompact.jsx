import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';


export function FooterCompact ( ){
    return(
        <footer className='w3-row w3-white'>
            {/* Social Media */}
            <div className='w3-col m12'>
                <div className='container w3-center'>
                    <Link to='..' className='w3-button'>
                        <FontAwesomeIcon className='w3-xlarge' icon={faFacebook} />
                    </Link>
                    <Link to='..' className='w3-button'>
                        <FontAwesomeIcon className='w3-xlarge' icon={faInstagram} />
                    </Link>
                    <Link to='..' className='w3-button'>
                        <FontAwesomeIcon className='w3-xlarge' icon={faTiktok} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}