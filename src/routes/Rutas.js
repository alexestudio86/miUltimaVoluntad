import { Layout } from '../layout/Layout';
import { createBrowserRouter } from 'react-router-dom';
import { HomepageView } from '../views/HomepageView';
import { PageView } from '../views/PageView'

export const Rutas = createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomepageView/>
            },
            {
                path: '/:pageUrl',
                element: <PageView />,
            }
        ]
    }
])