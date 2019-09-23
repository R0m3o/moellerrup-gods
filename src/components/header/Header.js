import React from 'react';
import Navbar from './Navbar';

const Header = () =>{
    return (
        <header>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="img-placeholder text-center">img-placeholder</div>
                </div>
            </div>
            <Navbar/>
        </header>
    )
}

export default Header;
