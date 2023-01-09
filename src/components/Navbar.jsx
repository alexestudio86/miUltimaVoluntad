import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


export function Navbar(){
    return (
        <nav className='w3-bar w3-white'>
            <div className='container'>
                <Link to='..' className='w3-bar-item w3-button'>
                    <img src={logo} height='50px' width='auto' alt='Logo' />
                </Link>
                <div className='w3-right w3-padding-large w3-text-orange fw-bold'>
                    <Link to='..' className='w3-bar-item w3-button'>Planes</Link>
                    <Link to='..' className='w3-bar-item w3-button'>Info</Link>
                    <Link to='..' className='w3-bar-item w3-button'>Contacto</Link>
                </div>
            </div>
        </nav>
    )
}