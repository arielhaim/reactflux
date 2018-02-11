import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (   
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <a href="/" className="navbar-brand">
                <img src=""/>
            </a>
            <ul className="nav navbar-nav">                         
                <li><Link to="/">Home</Link></li>
                <li><Link to="Authors">Authors</Link></li>
                <li><Link to="About">About</Link></li>
            </ul>
        </div>
    </nav>    
);

export default Header;