import React from "react"
import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg text-dark">
            <Link className="navbar-brand ml-2" to="/">
                Google Books </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/">
                        Search
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/saved">
                        Saved
                    </Link>
                </li>
            </ul>
        </nav >
    )
};

export default Nav