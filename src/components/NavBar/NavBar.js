import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../logoHenry.png';

import './Navbar.css';

export default function NavBar() {

    const location = useLocation()

    
    return (
        <header className="navbar">
            <div className='logoBusca'>
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            <div className='buscador'>
            {
                location.pathname === '/' && <NavLink to='/buscar' exact>
                                                <h4>BUSCAR PELICULAS</h4>
                                                </NavLink>
            }
            </div>
            </div>
            
            <nav>
                <ul className="list">
                    <li>
                        <NavLink exact to="/" >Home</NavLink>
                    </li>
                    <li>

                        <NavLink to="/favs" >Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}