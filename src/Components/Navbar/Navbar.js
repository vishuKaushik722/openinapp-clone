import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='left-nav'>
                <div className='logo'>
                    <img className='logo-img' src='https://openinapp.com/logo.svg' />
                </div>
                <div className='dropdown'>
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3838 11.3846C20.3838 13.8062 18.4208 15.7692 15.9992 15.7692C13.5777 15.7692 11.6146 13.8062 11.6146 11.3846C11.6146 8.96306 13.5777 7 15.9992 7C18.4208 7 20.3838 8.96306 20.3838 11.3846Z" stroke="#0e6fff" stroke-width="1.75"></path>
                    <path d="M15.9992 26C20.3425 26 22.8449 24.8797 24.0057 24.1586C24.5489 23.8212 24.8166 23.1999 24.7613 22.5563C24.6859 21.6773 24.3788 20.7994 24.0661 20.1031C23.6555 19.1888 22.7051 18.6923 21.7029 18.6923H10.2956C9.29336 18.6923 8.34295 19.1888 7.93238 20.1031C7.61967 20.7994 7.31256 21.6773 7.23711 22.5563C7.18187 23.1999 7.44959 23.8212 7.99277 24.1586C9.15357 24.8797 11.6559 26 15.9992 26Z" stroke="#0e6fff" stroke-width="1.75"></path>
                </svg>
                <div className='creator-text'>for Creators</div>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="transition ease-in" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
                </div>
            </div>
            <div className='left-nav-2'>
                <div className='logo-2'>
                    <img src='https://openinapp.com/logo-mobile.svg' />
                </div>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="transition ease-in" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
            </div>
            <div className='right-nav'>
                <div>
                    <button className='create-link'>
                    <img className='plus-img' src='https://openinapp.com/plus-create.svg' /> Create Smartlink
                    </button>
                </div>
                <div className='gap-2'>
                    <img src='https://openinapp.com/landing-create.svg' width={40} height={40} />
                </div>
                <div>
                    <button  className='login'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;