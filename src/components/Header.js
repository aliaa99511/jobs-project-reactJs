import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <h1>JobsNow</h1>
            <nav>
                <Link to="/jobs">All Jobs</Link>
            </nav>
            <SearchBox />
        </header>
    );
}

export default Header;
