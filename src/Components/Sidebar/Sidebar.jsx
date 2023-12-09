import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/Images/logo.png';

export default function Sidebar() {

    const sidebar = useRef();
    const sidebarLinks = useRef();
    const sidebarIcon = useRef();

    function changeStatus() {
        let left = window.getComputedStyle(sidebar.current).getPropertyValue('left');
        if (left === '0px') {
            closeSidebar();
        } else {
            openSidebar();
        }
    }
    function closeSidebar() {
        let width = sidebarLinks.current.offsetWidth
        sidebar.current.style.left = `-241.429px`;
        sidebarIcon.current.classList.replace('fa-xmark', 'fa-bars');
    }
    function openSidebar() {
        sidebar.current.style.left = "0px";
        sidebarIcon.current.classList.replace('fa-bars', 'fa-xmark');
    }
    
    return <>
    <nav ref={sidebar} className='nav position-fixed top-0 min-vh-100 d-flex flex-nowrap'>
            <div ref={sidebarLinks} className='links-part p-3 d-flex flex-column justify-content-between'>
                <div className="links">
                <ul className='list-unstyled'>
                    <li  className='p-0 mb-1 pointer'>
                        <NavLink className='p-2 rounded-2 w-100 d-inline-block' to={'/search'}>Search</NavLink>
                    </li>
                    <li className='p-0 mb-1 pointer'>
                        <NavLink className='p-2 rounded-2 w-100 d-inline-block' to={'/categories'}>Categories</NavLink>
                    </li>
                    <li className='p-0 mb-1 pointer'>
                        <NavLink className='p-2 rounded-2 w-100 d-inline-block' to={'/area'}>Area</NavLink>
                    </li>
                    <li className='p-0 mb-1 pointer'>
                        <NavLink className='p-2 rounded-2 w-100 d-inline-block' to={'/ingredients'}>Ingredients</NavLink>
                    </li>
                    <li className='p-0 mb-1 pointer'>
                        <NavLink className='p-2 rounded-2 w-100 d-inline-block' to={'/contact'}>Contact</NavLink>
                    </li>
                </ul>
                </div>
                <div className="nav-footer">
                <div className="icons">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter mx-2"></i>
                    <i className="fa-solid fa-globe"></i>
                </div>
                <p>Copyright Â© 2019 All Rights Reserved</p>
            </div>
            </div>
            <div className="nav-header bg-white d-flex flex-column justify-content-between py-4 px-1 text-dark text-center">
            <img src={logo} alt="website logo"/>
            <i ref={sidebarIcon} className="fa-solid fa-bars fs-1 pointer" onClick={changeStatus}></i>
            <div>
                <i className="fa-solid fa-globe d-block"></i>
                <i className="fa-solid fa-share-nodes"></i>
            </div>
        </div>
    </nav>
    </>
}
