import logo from '../../assets/theme/logo.png';
import { NavLink } from 'react-router-dom';


export function Navbar(){
    return (
        <nav className='w3-bar w3-white'>
            <div className='container'>
                <NavLink to='/' className={ ({isActive}) => (isActive && 'w3-border-orange ') + 'w3-bar-item w3-button' }>
                    <img src={logo} height='50px' width='auto' alt='Logo' />
                </NavLink>
                <div className='w3-right w3-padding-large w3-text-orange fw-bold'>
                    <NavLink to='quienes-somos' className='w3-bar-item w3-button'>¿Quienes somos?</NavLink>
                    <NavLink to='planes' className='w3-bar-item w3-button'>Planes</NavLink>
                    <NavLink to='contacto' className='w3-bar-item w3-button'>Contacto</NavLink>
                </div>
            </div>
        </nav>
    )
}