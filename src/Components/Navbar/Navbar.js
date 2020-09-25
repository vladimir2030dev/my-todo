import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="navbar-brand">
                My notes
            </div>
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <NavLink
                        className="nav-link"
                        to="/"
                        exact
                    >
                        Главная
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink
                        className="nav-link"
                        to="/about"
                    >
                        О приложении
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar