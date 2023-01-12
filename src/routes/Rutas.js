import { createBrowserRouter } from 'react-router-dom';
import { HomepageView } from '../views/HomepageView';
import { PageView } from '../views/PageView'

export const Rutas = createBrowserRouter([
    {
        path:'/',
        element: <HomepageView />,
        children: [
            {
                path: '/:pageID',
                element: <PageView />,
            }
        ]
    }
])