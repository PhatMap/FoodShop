import { Link } from "react-router-dom"
import Popup from "./Popup"
import React, { useState } from "react";

const Navbar = () => {
    
    return (
        <div className="nav">
            <nav className="nav-list">
                <Link to={'/'} className="nav-item">Home</Link>
                <Link to={'/about'} className="nav-item">About</Link>
            </nav>
            <Popup></Popup>
            <nav className="nav-list">
                <Link to={'/login'} className="nav-item">Login</Link>
                <Link to={'/register'} className="nav-item">Register</Link>
            </nav>
        </div>
    )
}

export default Navbar