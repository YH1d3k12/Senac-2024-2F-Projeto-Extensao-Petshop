import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import './style.css';

export default function Layout() {
    return (
        <div className='layout'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};