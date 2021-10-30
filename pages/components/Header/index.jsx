import React, { useEffect } from 'react';

import Link from 'next/link';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Header = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    
    return(
        <div className="header">
            <Link href='/'>
                <Image src="/currency-converter.png" alt="" className="logo" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                />
            </Link>
            <div 
                className="header-right" 
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
                <Link href='/'>
                    <a className="active" href="home">Home</a>
                </Link>
                <Link href='/contact'>
                    <a href="contact">Contact</a>
                </Link>
                <Link href='/about'>
                    <a href="about">About</a>
                </Link>
            </div>
        </div>
    );
}

export default Header;
