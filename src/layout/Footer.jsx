import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FooterFull } from '../components/footer/FooterFull';
import { FooterCompact } from '../components/footer/FooterCompact';



export function Footer ( ){
    const { pageUrl } = useParams();
    return(
        <footer className='w3-row w3-white'>
            { !pageUrl && <FooterFull /> }
            <FooterCompact />
        </footer>
    )
}