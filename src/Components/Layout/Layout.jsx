import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import useNetwork from '../Hooks/useNetwork'

export default function Layout() {

    const network = useNetwork();

    return <>
        <div className="container py-5">
            <Outlet />
            <div>{ network }</div>
        </div>
        
        <Sidebar />
        
    </>
}
