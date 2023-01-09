import './header.css';
import { Link } from 'react-router-dom';


export function Header(){
    return (
        <header className='bg-header w3-row'>
            <div className='w3-half h-100 black-transparent-medium'>
                <div className='w3-cell-row h-100'>
                    <div className='w3-cell w3-container w3-cell-middle'>
                        <h2 className='w3-jumbo w3-text-white py-2'>Mi última voluntad</h2>
                        <p className='w3-xxlarge w3-text-white py-2'>Estamos contigo en los momentos difíciles</p>
                    </div>
                </div>
            </div>
            <div className='w3-half h-100'>
                <div className='w3-display-container h-100'>
                    <div className='w3-display-middle'>
                        <Link to='..' className='w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off'>Leer mas...</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}