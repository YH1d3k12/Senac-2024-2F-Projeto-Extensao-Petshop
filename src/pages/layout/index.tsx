import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className='layout'>
            <h1>ESTOU VIVO!!!</h1>
            <div className='layout-background'>
                <Outlet />
            </div>
        </div>
    );
};