import { Button } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';


const Header = () => {
    const mainmenu =
        <>
            <li><Link className='text-lg font-medium' to='/'>Home</Link></li>
            <li><Link className='text-lg font-medium' to='/about' >About</Link></li>
            <li><Link className='text-lg font-medium' to='/blogs'>Blog</Link></li>
            <li><Link className='text-lg font-medium' to='/contact'>Contact</Link></li>
        </>

    return (
        <>
            <div class="navbar bg-base-100 z-100 lg:px-20 px-5">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
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
                    <Link to='#' class="btn btn-sm btn-primary rounded-full ml-2">Contact Us</Link>
                </div>
            </div>
        </>
    );
};

export default Header;