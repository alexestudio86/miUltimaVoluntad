import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Notice } from "./Notice";
import { Navbar } from "./Navbar";
import { Footer } from './Footer';


export function Layout ( ){
    const { pageUrl } = useParams();
    return (
        <div className='w3-row h-100 w3-light-gray'>
            { !pageUrl && <Notice />  }
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}