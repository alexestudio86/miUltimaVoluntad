import { QuienesSomosContent } from "../components/pages/quienesSomos/QuienesSomosContent"
import { Navbar } from '../components/layout/navbar/Navbar';
import { FooterCompact } from '../components/layout/footer/FooterCompact'

export function QuienesSomos ( ){
    return(
        <>
            <Navbar />
            <div className='w3-row h-100 w3-light-gray'>
                <div className='container py-2'>
                    <QuienesSomosContent />
                </div>
            </div>
            <FooterCompact />
        </>
    )
}