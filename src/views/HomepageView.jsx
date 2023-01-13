
import { Header } from '../layout/Header';
import { Features } from '../layout/Features'
import { Categories } from '../layout/Categories';
import { Items } from '../layout/Items';


export function HomepageView ( ){
    return(
        <>
            <Header />
            <Categories />
            <Items />
            <Features />
        </>
    )
}