import { Feature } from './Feature';
import { faStar, faPhone } from '@fortawesome/free-solid-svg-icons';


export function Features ( ){
    return(
        <div className='container py-4'>
            <div className='w3-row'>
                <Feature bodyFeature={ {
                    icono: faStar,
                    texto: 'Contamos con asistencia inmediata las 24h del día',
                    titulo: 'Asistencia 24h'
                } } />
                <Feature bodyFeature={ {
                    icono: faPhone,
                    texto: 'Recibirá asesoría total en caso de un siniestro',
                    titulo: 'Apoyo en emergencias'
                } } />
            </div>
        </div>
    )
}