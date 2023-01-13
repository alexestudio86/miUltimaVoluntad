import { useParams } from "react-router-dom";
import { QuienesSomosContent } from '../pages/QuienesSomosContent';
import { PlanesContent } from '../pages/PlanesContent';
import { ContactoContent } from '../pages/ContactoContent';


export function PageView ( props ){
    const { pageUrl } = useParams();
    {
        if( pageUrl === 'quienes-somos' ){
            return (
                <main className='container py-4'>
                   <div className="w3-white w3-padding">
                       <QuienesSomosContent />
                    </div>
                </main>
            )
        }else if( pageUrl === 'planes' ){
            return (
                <main className='container py-4'>
                   <div className="w3-white w3-padding">
                        <PlanesContent />
                    </div>
                </main>
            )
        }else if( pageUrl === 'contacto' ){
            return (
                <main className='container py-4'>
                    <div className="w3-white w3-padding">
                        <ContactoContent />
                    </div>
                </main>
            )
        }
    }
}