import React from "react"
import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav className="navbar is-link py-3" role="navigation" aria-label="main navigation">
            <div className="navbar-brand ">
                <Link className="navbar-item has-text-weight-bold ml-2" to="/" style={{fontSize:"22px"}}>
                    Google Books
                </Link>
            </div>
            <div className="navbar-item">
                <Link className="has-text-white" to="/" style={{fontSize:"18px"}}>
                    Search
                    </Link>
            </div>
            <div className="navbar-item">
                <Link className="has-text-white" to="/saved" style={{fontSize:"18px"}}>
                    Saved
                    </Link>
            </div>
        </nav >
    )
};

export default Nav