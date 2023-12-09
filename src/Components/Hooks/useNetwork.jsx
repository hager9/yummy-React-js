import React, { useEffect, useState } from 'react'

export default function useNetwork() {

    let [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        detectOnline();
    }, [])
    
    function detectOnline() {
        window.addEventListener('online', () => {
            setIsOnline(true);
        });
        window.addEventListener('offline', () => {
            setIsOnline(false);
        })
    }

    return <>
        {!isOnline ?  <div className="network ms-4 me-2 fw-bold bg-dark text-light px-2 py-3 rounded-2"> 
            <i className="fas fa-wifi me-1"></i> No internet connection!</div> : '' }
        
    </>
}