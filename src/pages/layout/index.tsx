import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navbar';

export default function Layout() {
    return (
        <div className='layout'>
            <NavBar />
            <Outlet />
        </div>
    );
};