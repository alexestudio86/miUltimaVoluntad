import logo from '../../assets/theme/logo.png';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export function NavbarFull ( ) {
    return(
        <div className='container'>
            <Link to='/' className='w3-bar-item' >
                <img src={logo} height='50px' width='auto' alt='Logo' />
            </Link>
            <div className='w3-right w3-padding-large w3-text-orange fw-bold'>
                <NavLink to='quienes-somos' className={ ({isActive}) => (isActive && 'w3-border w3-border-orange ') + 'w3-bar-item w3-button'} >¿Quienes somos?</NavLink>
                <NavLink to='planes' className={ ({isActive}) => (isActive && 'w3-border w3-border-orange ') + 'w3-bar-item w3-button'}>Planes</NavLink>
                <NavLink to='contacto' className={ ({isActive}) => (isActive && 'w3-border w3-border-orange ') + 'w3-bar-item w3-button'}>Contacto</NavLink>
            </div>
        </div>
    )
}