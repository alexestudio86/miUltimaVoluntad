import Benefits from '../../assets/categories/benefits.jpg';
import Information from '../../assets/categories/information.jpg';
import Travel from '../../assets/categories/travel.jpg';
import { Category } from './Category';

export function Categories () {
    return (
        <main className='container py-4'>
            <div className='w3-row'>
                <Category bodyArticle={ {
                    title: 'Beneficioes',
                    imgUrl: Benefits
                } } />
                <Category bodyArticle={ {
                    title: 'Información',
                    imgUrl: Information
                } } />
                <Category bodyArticle={ {
                    title: 'Viajes',
                    imgUrl: Travel
                } } />
            </div>
        </main>
    )
}