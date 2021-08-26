import React, { useEffect, useState } from 'react';
import './Header.css';
import mobileBG from '../../images/bg-header-mobile.svg';
import desktopBG from '../../images/bg-header-desktop.svg';

let chk = true;
if(window.innerWidth >= 1024) chk = false;

export default function Header() {
    const [isMobile, setIsMobile] = useState(chk);
    useEffect(() => {
        function resizeFunc() {
            window.innerWidth >= 1024 ? setIsMobile(false) : setIsMobile(true);
        }
        window.addEventListener('resize', resizeFunc);
        return () => window.removeEventListener('resize', resizeFunc);
    },[]);

    return (
        <header>
            <img src={isMobile ? mobileBG : desktopBG} alt="" />
        </header>
    );
}