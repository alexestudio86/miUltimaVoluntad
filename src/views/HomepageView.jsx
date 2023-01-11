import { Notice } from '../layout/notice/Notice';
import { Navbar } from "../layout/navbar/Navbar";
import { Header } from '../layout/header/Header';
import { Features } from '../layout/features/Features'
import { Categories } from '../layout/categories/Categories';
import { FooterFull } from '../layout/footer/FooterFull'


export function HomepageView ( ){
    return(
        <div className='w3-row h-100 w3-light-gray'>
            <Notice />
            <Navbar />
            <Header />
            <Features />
            <Categories />
            <FooterFull />
        </div>
    )
}