import planes from "../components/planes/planes.json";
import { Plan } from "../components/planes/Plan";


export function PlanesContent ( ){

    return (
        <div className='container py-4'>
            <div className="w3-white w3-padding">
                <h1 className="w3-center">Planes</h1>
                <div className="w3-row-padding">
                    { planes.map( plan => <Plan planBody={plan} /> ) }
                </div>
            </div>
        </div>
    )
}