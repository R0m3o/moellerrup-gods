import React from 'react';
import Navbar from './Navbar';
import Logo from '../../assets/images/mollerup.logo.png';

const Header = () =>{
    return (
        <header className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="row">
                        <img src={Logo} alt="møllerup logo" className="col-md-10 offset-md-1"/>
                    </div>
                </div>
            </div>
            <Navbar/>
        </header>
    )
}

export default Header;
