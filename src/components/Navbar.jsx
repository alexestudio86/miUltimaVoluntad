import logo from '../assets/logo.png'

export function Navbar(){
    return (
        <nav className='w3-bar w3-white'>
            <div className='container'>
                <a href='#' className='w3-bar-item w3-button'>
                    <img src={logo} height='50px' width='auto' alt='Logo' />
                </a>
                <div className='w3-right w3-padding-large w3-text-orange fw-bold'>
                    <a href='#' className='w3-bar-item w3-button'>Planes</a>
                    <a href='#' className='w3-bar-item w3-button'>Info</a>
                    <a href='#' className='w3-bar-item w3-button'>Contacto</a>
                </div>
            </div>
        </nav>
    )
}