import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu, IoIosClose } from 'react-icons/io';
import logo from '../../assets/logo.jpg';
import './style.css';

export default function NavBar() {
    const [isModalNavOpen, setIsModalNavOpen] = useState(false);

    const toggleMenu = () => {
        setIsModalNavOpen(prevState => !prevState);
    };

    return (
        <header className='navbar'>
            <Link to='/'><img src={logo} alt='Logo' /></Link>
             <button onClick={toggleMenu}>
                {isModalNavOpen ? <IoIosClose/> : <IoMdMenu/>}
            </button>
        </header>
    );
};