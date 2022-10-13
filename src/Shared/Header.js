import { Button } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';


const Header = () => {
    const mainmenu =
        <>
            <li><Link to='/'>Home</Link></li>
            <li tabindex="0"><Link to='/about' class="justify-between">About</Link>
            </li>
            <li><Link to='/blogs'>Blog</Link></li>
        </>

    return (
        <>
            <div class="navbar bg-base-100 z-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {mainmenu}
                        </ul>
                    </div>
                    <Link to='/' class=""><img src={logo} alt="" /></Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {mainmenu}
                    </ul>
                </div>
                <div class="navbar-end">
                    <button><SearchIcon /></button>
                    <Link to='#' class="btn btn-primary rounded-full">Contact Us</Link>
                </div>
            </div>
        </>
    );
};

export default Header;