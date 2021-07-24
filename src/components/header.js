import React from 'react'
import './header.css'
import TeslaLogo from '../assets/Copy of teslaLogoSmall.svg'
const Header = () => {
    return(
        <div className = "header">
            <div className = "header_logo">
                <img src={TeslaLogo}  alt="Tesla Logo"/>    
            </div>

            <div className = "header_center">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </div>

            <div className="header_right">
                <p>Shop</p>
                <p>Account</p>
            </div>

        </div>
    );
}

export default Header
