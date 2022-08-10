import { Routes, Route, Link } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';

const Header = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/works">Works</Link>

            <button>☀️</button>
            <button>🌒</button>
        </nav>
    );
};

export default Header;
