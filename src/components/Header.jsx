import { Routes, Route, Link } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';
import ChangeThemeButton from './ChangeThemeButton';

const Header = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/works">Works</Link>

            <ChangeThemeButton />
        </nav>
    );
};

export default Header;
