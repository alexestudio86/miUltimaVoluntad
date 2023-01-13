import { Category } from '../components/categories/Category';
import { categorias } from '../components/categories/categorias'

export function Categories () {
    return (
        <div className='container py-4'>
            <div className='w3-row'>
                { categorias.map( (categoria, index) => <Category key={index} bodyArticle={categoria} /> ) }
            </div>
        </div>
    )
}