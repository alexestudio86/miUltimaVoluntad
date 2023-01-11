import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomepageView } from '../views/HomepageView';
import { PageView } from '../views/PageView'

export function Rutas( ){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomepageView />} />
                <Route path='/p' element={<PageView />} />
                <Route path='/p/quienes-somos' />
            </Routes>
        </BrowserRouter>
    )
}