import React from 'react';
import {NavLink} from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-sm navbar-light fixed-top py-3'>
            <div className='container'>
                <NavLink to='/' exact={true} className='navbar-brand'><i className="fa-solid fa-kiwi-bird me-2 fs-4"></i>Beautiful Birds</NavLink>
                <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#mycollapse">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='navbar-collapse collapse' id='mycollapse'>
                    <ul className='navbar-nav nav-pills ms-auto p-2 p-sm-0'>
                        <li className='nav-item mx-2'><NavLink to='/' exact={true} className='nav-link fs-5'>Home</NavLink></li>
                        <li className='nav-item mx-2'><NavLink to='/about' exact={true} className='nav-link fs-5'>Abouts</NavLink></li>
                        <li className='nav-item mx-2'><NavLink to='/contact' exact={true} className='nav-link fs-5'>Contact</NavLink></li>
                        <li className='nav-item mx-2'><NavLink to='/member' exact={true} className='nav-link fs-5'>Member</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

